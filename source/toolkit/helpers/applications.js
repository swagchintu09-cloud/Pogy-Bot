const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");
const { buildNoticePanel } = require("./cv2");
const { sanitizeText } = require("./moderation-security");
const ApplicationSubmission = require("../../models/ApplicationSubmission");

function defaults() {
  return {
    enabled: false,
    panelChannelId: null,
    reviewChannelId: null,
    reviewerRoleIds: [],
    questions: [
      "Why do you want to join the staff team?",
      "What moderation experience do you have?",
      "How active can you be each week?",
      "How would you handle a difficult member?",
      "Why should we choose you?",
    ],
    counter: 0,
  };
}

async function getApplicationConfig(client, guildId) {
  const guildData = await client.database.guildData.get(guildId);
  return { ...defaults(), ...(guildData?.applications || {}) };
}

async function saveApplicationConfig(client, guildId, config) {
  return client.database.guildData.patch(guildId, {
    applications: { ...defaults(), ...config },
  });
}

function buildApplicationPanel(client, config) {
  return {
    components: [
      buildNoticePanel({
        title: `${client.config.Client.emoji.member} Staff Applications`,
        lines: [
          "Submit your application to be reviewed by the staff team.",
          "",
          `${config.questions.length} question(s) are currently configured.`,
        ],
      }),
      new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("application:start")
          .setLabel("Apply Now")
          .setStyle(ButtonStyle.Success)
      ),
    ],
    flags: 1 << 15,
    allowedMentions: { parse: [] },
  };
}

function buildApplicationModal(config) {
  const modal = new ModalBuilder()
    .setCustomId("application:submit")
    .setTitle("Application Form");

  const questions = config.questions.slice(0, 5);
  for (let index = 0; index < questions.length; index += 1) {
    modal.addComponents(
      new ActionRowBuilder().addComponents(
        new TextInputBuilder()
          .setCustomId(`application_answer_${index}`)
          .setLabel(sanitizeText(questions[index], { maxLength: 45, fallback: `Question ${index + 1}` }))
          .setStyle(TextInputStyle.Paragraph)
          .setRequired(true)
          .setMaxLength(800)
      )
    );
  }

  return modal;
}

async function createSubmission(interaction, client) {
  const config = await getApplicationConfig(client, interaction.guild.id);
  if (!config.enabled || !config.reviewChannelId) {
    return { error: "Application system is not configured yet." };
  }

  const pending = await ApplicationSubmission.findOne({
    guildId: interaction.guild.id,
    userId: interaction.user.id,
    status: "pending",
  });
  if (pending) {
    return { error: "You already have a pending application." };
  }

  const reviewChannel = interaction.guild.channels.cache.get(config.reviewChannelId);
  if (!reviewChannel?.isTextBased?.()) {
    return { error: "The review channel is missing or invalid." };
  }

  const answers = config.questions.slice(0, 5).map((question, index) => ({
    question,
    answer: sanitizeText(interaction.fields.getTextInputValue(`application_answer_${index}`), {
      fallback: "No answer provided.",
      maxLength: 800,
    }),
  }));

  const nextId = Number(config.counter || 0) + 1;
  config.counter = nextId;
  await saveApplicationConfig(client, interaction.guild.id, config);

  const submission = await ApplicationSubmission.create({
    guildId: interaction.guild.id,
    applicationId: nextId,
    userId: interaction.user.id,
    answers,
  });

  const reviewMessage = await reviewChannel.send({
    components: [
      buildNoticePanel({
        title: `${client.config.Client.emoji.member} Application #${nextId}`,
        lines: [
          `Applicant: **${sanitizeText(interaction.user.tag, { maxLength: 80 })}**`,
          ...answers.flatMap((entry) => [``, `**${entry.question}**`, entry.answer]),
        ],
      }),
      new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId(`application:approve:${submission.id}`)
          .setLabel("Approve")
          .setStyle(ButtonStyle.Success),
        new ButtonBuilder()
          .setCustomId(`application:deny:${submission.id}`)
          .setLabel("Deny")
          .setStyle(ButtonStyle.Danger)
      ),
    ],
    flags: 1 << 15,
    allowedMentions: { parse: [] },
  });

  submission.reviewMessageId = reviewMessage.id;
  await submission.save();

  return { submission };
}

async function reviewSubmission(interaction, client, decision, id) {
  const config = await getApplicationConfig(client, interaction.guild.id);
  if (
    !interaction.member.permissions.has("ManageGuild") &&
    !config.reviewerRoleIds.some((roleId) => interaction.member.roles.cache.has(roleId))
  ) {
    return { error: "You do not have permission to review applications." };
  }

  const submission = await ApplicationSubmission.findById(id);
  if (!submission || submission.guildId !== interaction.guild.id) {
    return { error: "That application no longer exists." };
  }
  if (submission.status !== "pending") {
    return { error: `This application is already **${submission.status}**.` };
  }

  submission.status = decision;
  submission.reviewerId = interaction.user.id;
  await submission.save();

  const applicant = await client.users.fetch(submission.userId).catch(() => null);
  if (applicant) {
    await applicant.send(
      `Your application in ${interaction.guild.name} was ${decision}.`
    ).catch(() => null);
  }

  await interaction.update({
    components: [
      buildNoticePanel({
        title: `${client.config.Client.emoji.member} Application #${submission.applicationId}`,
        lines: [
          `Applicant: <@${submission.userId}>`,
          `Decision: **${decision}**`,
          `Reviewer: **${sanitizeText(interaction.user.tag, { maxLength: 80 })}**`,
        ],
      }),
    ],
    flags: 1 << 15,
    allowedMentions: { parse: [] },
  }).catch(() => null);

  return { submission };
}

module.exports = {
  ApplicationSubmission,
  buildApplicationModal,
  buildApplicationPanel,
  createSubmission,
  getApplicationConfig,
  reviewSubmission,
  saveApplicationConfig,
};

const {
  ContainerBuilder,
  MessageFlags,
  SeparatorBuilder,
  SeparatorSpacingSize,
  TextDisplayBuilder,
} = require("discord.js");

function toLines(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  return value ? [value] : [];
}

function buildPanel({ title, lines = [], footer = null }) {
  const container = new ContainerBuilder();
  container.addTextDisplayComponents(
    new TextDisplayBuilder().setContent(
      [`# ${title}`, ...toLines(lines)].join("\n")
    )
  );

  if (footer) {
    container.addSeparatorComponents(
      new SeparatorBuilder()
        .setDivider(true)
        .setSpacing(SeparatorSpacingSize.Small)
    );
    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(footer)
    );
  }

  return container;
}

async function sendPanel(target, panel) {
  const payload = {
    components: [panel],
    flags: MessageFlags.IsComponentsV2,
  };

  if (target?.author && target?.channel?.send) {
    return target.channel.send(payload);
  }

  return target.reply(payload);
}

module.exports = {
  buildPanel,
  sendPanel,
};

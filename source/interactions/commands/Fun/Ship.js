const Command = require("../../abstract/command");
const {
    AttachmentBuilder,
    ContainerBuilder,
    MediaGalleryBuilder,
    MediaGalleryItemBuilder,
    MessageFlags,
    SeparatorBuilder,
    SeparatorSpacingSize,
    TextDisplayBuilder,
} = require('discord.js');
const Canvas = require("@napi-rs/canvas");

module.exports = class Ship extends Command {
    constructor(...args) {
        super(...args, {
            name: "ship",
            aliases: ["ship"],
            description: "Ship two users",
            category: "Fun",
            usage: ["ship <user1> <user2>"],
            userPerms: ["ViewChannel", "SendMessages"],
            botPerms: ["ViewChannel", "SendMessages"],
            cooldown: 5,
            image: "https://i.imgur.com/fTy8lmQ.png",
            options: [
                {
                    name: "user1",
                    description: "The first user",
                    type: 6,
                    required: true,
                },
                {
                    name: "user2",
                    description: "The second user",
                    type: 6,
                    required: true,
                },
            ],
        });
    }

    async run({ message, args }) {
        let member = args[0] ? await this.client.util.userQuery(args[0]) : null;
        if (!member) {
            const members = message?.guild.members.cache
                .filter((entry) => !entry.user.bot && entry.user.id !== message?.author.id)
                .map((entry) => entry.user.id);
            if (!members?.length) {
                return message?.channel.send("Please mention a user to ship with.");
            }
            let random = Math.floor(Math.random() * members.length);
            member = members[random];
        }
        if (!member) return message?.channel.send("Please provide a user to ship with");
        let member2 = args[1] ? await this.client.util.userQuery(args[1]) : message?.author.id;
        if (!member2) return message?.channel.send("Please provide a second user to ship with");
        const user1 = await this.client.users.fetch(member);
        const user2 = await this.client.users.fetch(member2);
        if (user1.id === user2.id) return message?.channel.send("You can't ship the same user twice!");
        if (user1.id === this.client.user.id) return message?.channel.send("I'm flattered, but I'm already in a relationship with my developer!");

        let love = null;
        if (user1.id === "1055692435453378580" || user2.id === "1055692435453378580") {
            let numbers = [69, 99, 98, 90];
            let randomxd = Math.floor(Math.random() * numbers.length);
            love = numbers[randomxd];
        } else {
            love = Math.floor(Math.random() * 100) + 1;
        }

        const image = await this.genImage(user1, user2, love);
        const attach = new AttachmentBuilder(image, { name: "ship.png" });
        const panel = this.buildShipPanel(user1, user2, love);

        message?.reply({
            components: [panel],
            files: [attach],
            flags: MessageFlags.IsComponentsV2,
        });
    }

    async genImage(user1, user2, love) {
        const user1avatar = user1.displayAvatarURL({ extension: "png", size: 512 });
        const user2avatar = user2.displayAvatarURL({ extension: "png", size: 512 });
        const user1avatarpng = user1avatar.replace("webp", "png");
        const user2avatarpng = user2avatar.replace("webp", "png");
        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');

        let backgrounds = [
            "https://media.discordapp.net/attachments/987750014719782912/1066703847092920320/31e8681bcc4d72d97e738f75419e8e7a.jpg?width=661&height=220",
            "https://media.discordapp.net/attachments/987750014719782912/1066703846715437066/2c5fe8c3c135ab5bd24582931e5a2f98.jpg?width=596&height=198",
            "https://media.discordapp.net/attachments/987750014719782912/1066703846325354576/7206c19ce12067f0bf6cd10ac12eed05.jpg?width=662&height=254",
            "https://media.discordapp.net/attachments/987750014719782912/1066703841728409640/20c4fba0f64d210e584e34c6ee5aec1c.jpg?width=661&height=220",
            "https://media.discordapp.net/attachments/987750014719782912/1066703566120702033/cpb15.jpg?width=534&height=332"
        ];

        let randombg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
        const background = await this.safeLoadImage(randombg);

        if (background) {
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        } else {
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#111827');
            gradient.addColorStop(0.5, '#3b0764');
            gradient.addColorStop(1, '#0f172a');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        this.drawLoveIcon(ctx, love >= 50, 350, 135);

        ctx.font = '50px sans-serif';
        ctx.fillStyle = '#ffffff'; 
        ctx.fillText(`${love}%`, 305, 150);
        ctx.beginPath();
        ctx.arc(175, 125, 100, 0, Math.PI * 2, true);
        ctx.arc(525, 125, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        const avatar1 = await this.safeLoadImage(user1avatarpng);
        if (avatar1) {
            ctx.drawImage(avatar1, 75, 25, 200, 200);
        }

        const avatar2 = await this.safeLoadImage(user2avatarpng);
        if (avatar2) {
            ctx.drawImage(avatar2, 425, 25, 200, 200);
        }

        return canvas.toBuffer('image/png');
    }

    async safeLoadImage(source) {
        if (!source || typeof source !== 'string') return null;
        try {
            return await Canvas.loadImage(source);
        } catch {
            return null;
        }
    }

    drawLoveIcon(ctx, connected, centerX, centerY) {
        const size = 60;
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.beginPath();
        // Proper Heart Shape
        ctx.moveTo(0, size * 0.4);
        ctx.bezierCurveTo(size * 0.6, size * 0.3, size * 0.6, -size * 0.5, 0, -size * 0.2);
        ctx.bezierCurveTo(-size * 0.6, -size * 0.5, -size * 0.6, size * 0.3, 0, size * 0.4);
        ctx.closePath();
        
        ctx.fillStyle = connected ? '#ff4d8d' : '#94a3b8';
        ctx.shadowColor = connected ? '#ff4d8d' : '#64748b';
        ctx.shadowBlur = 24;
        ctx.fill();
        ctx.restore();

        if (!connected) {
            ctx.save();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(centerX - 10, centerY - 25);
            ctx.lineTo(centerX + 5, centerY - 5);
            ctx.lineTo(centerX - 5, centerY + 5);
            ctx.lineTo(centerX + 10, centerY + 25);
            ctx.stroke();
            ctx.restore();
        }
    }

    async exec({ interaction }) {
        const user1 = interaction?.options.getUser("user1");
        const user2 = interaction?.options.getUser("user2");
        const love = Math.floor(Math.random() * 100) + 1;
        const image = await this.genImage(user1, user2, love);
        const attach = new AttachmentBuilder(image, { name: "ship.png" });
        const panel = this.buildShipPanel(user1, user2, love, interaction?.user.username);

        interaction?.reply({
            components: [panel],
            files: [attach],
            flags: MessageFlags.IsComponentsV2,
        });
    }

    buildShipPanel(user1, user2, love, requestedBy = null) {
        const container = new ContainerBuilder();
        const headline = love >= 50
            ? `${user1.username} and ${user2.username} landed **${love}%** compatibility.`
            : `${user1.username} and ${user2.username} only pulled **${love}%** compatibility.`;
        const subline = love >= 80
            ? "This pairing is absurdly strong."
            : love >= 50
                ? "There is actually something here."
                : "Probably better as chaotic friendship lore.";

        container.addTextDisplayComponents(
            new TextDisplayBuilder().setContent(
                [
                    "# Ship Result",
                    headline,
                    subline,
                ].join("\n")
            )
        );

        container.addSeparatorComponents(
            new SeparatorBuilder()
                .setDivider(true)
                .setSpacing(SeparatorSpacingSize.Small)
        );

        container.addMediaGalleryComponents(
            new MediaGalleryBuilder().addItems(
                new MediaGalleryItemBuilder().setURL("attachment://ship.png")
            )
        );

        if (requestedBy) {
            container.addSeparatorComponents(
                new SeparatorBuilder()
                    .setDivider(true)
                    .setSpacing(SeparatorSpacingSize.Small)
            );

            container.addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`Requested by **${requestedBy}**`)
            );
        }

        return container;
    }
};

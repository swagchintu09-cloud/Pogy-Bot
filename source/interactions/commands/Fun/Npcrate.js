const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "npcrate",
    "aliases": [
        "npcrate"
    ],
    "title": "Npc Rate",
    "description": "Check the npc level.",
    "usage": [
        "npcrate <user>"
    ],
    "scale": "npc",
    "high": "That is elite npc energy.",
    "mid": "That is respectable npc territory.",
    "low": "That is barely any npc at all.",
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "heroicrate",
    "aliases": [
        "heroicrate"
    ],
    "title": "Heroic Rate",
    "description": "Check the heroic level.",
    "usage": [
        "heroicrate <user>"
    ],
    "scale": "heroic",
    "high": "That is elite heroic energy.",
    "mid": "That is respectable heroic territory.",
    "low": "That is barely any heroic at all.",
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "bossrate",
    "aliases": [
        "bossrate"
    ],
    "title": "Boss Rate",
    "description": "Check the boss level.",
    "usage": [
        "bossrate <user>"
    ],
    "scale": "boss",
    "high": "That is elite boss energy.",
    "mid": "That is respectable boss territory.",
    "low": "That is barely any boss at all.",
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "savagerate",
    "aliases": [
        "savagerate"
    ],
    "title": "Savage Rate",
    "description": "Check the savage level.",
    "usage": [
        "savagerate <user>"
    ],
    "scale": "savage",
    "high": "That is elite savage energy.",
    "mid": "That is respectable savage territory.",
    "low": "That is barely any savage at all.",
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "trollrate",
    "aliases": [
        "trollrate"
    ],
    "title": "Troll Rate",
    "description": "Check the troll level.",
    "usage": [
        "trollrate <user>"
    ],
    "scale": "troll",
    "high": "That is elite troll energy.",
    "mid": "That is respectable troll territory.",
    "low": "That is barely any troll at all.",
    "cooldown": 3
});

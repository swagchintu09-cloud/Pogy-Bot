const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "zombierate",
    "aliases": [
        "zombierate"
    ],
    "title": "Zombie Rate",
    "description": "Check the zombie level.",
    "usage": [
        "zombierate <user>"
    ],
    "scale": "zombie",
    "high": "That is elite zombie energy.",
    "mid": "That is respectable zombie territory.",
    "low": "That is barely any zombie at all.",
    "cooldown": 3
});

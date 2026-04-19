const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "cornyrate",
    "aliases": [
        "cornyrate"
    ],
    "title": "Corny Rate",
    "description": "Check the corny level.",
    "usage": [
        "cornyrate <user>"
    ],
    "scale": "corny",
    "high": "That is elite corny energy.",
    "mid": "That is respectable corny territory.",
    "low": "That is barely any corny at all.",
    "cooldown": 3
});

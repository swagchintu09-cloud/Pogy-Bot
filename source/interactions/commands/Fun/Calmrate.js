const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "calmrate",
    "aliases": [
        "calmrate"
    ],
    "title": "Calm Rate",
    "description": "Check the calm level.",
    "usage": [
        "calmrate <user>"
    ],
    "scale": "calm",
    "high": "That is elite calm energy.",
    "mid": "That is respectable calm territory.",
    "low": "That is barely any calm at all.",
    "cooldown": 3
});

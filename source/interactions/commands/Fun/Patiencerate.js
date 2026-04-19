const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "patiencerate",
    "aliases": [
        "patiencerate"
    ],
    "title": "Patience Rate",
    "description": "Check the patience level.",
    "usage": [
        "patiencerate <user>"
    ],
    "scale": "patience",
    "high": "That is elite patience energy.",
    "mid": "That is respectable patience territory.",
    "low": "That is barely any patience at all.",
    "cooldown": 3
});

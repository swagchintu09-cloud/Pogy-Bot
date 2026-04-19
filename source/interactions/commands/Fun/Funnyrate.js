const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "funnyrate",
    "aliases": [
        "funnyrate"
    ],
    "title": "Funny Rate",
    "description": "Check the funny level.",
    "usage": [
        "funnyrate <user>"
    ],
    "scale": "funny",
    "high": "That is elite funny energy.",
    "mid": "That is respectable funny territory.",
    "low": "That is barely any funny at all.",
    "cooldown": 3
});

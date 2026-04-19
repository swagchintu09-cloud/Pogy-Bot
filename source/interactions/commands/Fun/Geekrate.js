const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "geekrate",
    "aliases": [
        "geekrate"
    ],
    "title": "Geek Rate",
    "description": "Check the geek level.",
    "usage": [
        "geekrate <user>"
    ],
    "scale": "geek",
    "high": "That is elite geek energy.",
    "mid": "That is respectable geek territory.",
    "low": "That is barely any geek at all.",
    "cooldown": 3
});

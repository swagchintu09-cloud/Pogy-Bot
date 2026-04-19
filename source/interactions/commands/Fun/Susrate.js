const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "susrate",
    "aliases": [
        "susrate"
    ],
    "title": "Sus Rate",
    "description": "Check the sus level.",
    "usage": [
        "susrate <user>"
    ],
    "scale": "sus",
    "high": "That is elite sus energy.",
    "mid": "That is respectable sus territory.",
    "low": "That is barely any sus at all.",
    "cooldown": 3
});

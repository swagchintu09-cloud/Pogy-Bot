const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "babyrate",
    "aliases": [
        "babyrate"
    ],
    "title": "Baby Rate",
    "description": "Check the baby level.",
    "usage": [
        "babyrate <user>"
    ],
    "scale": "baby",
    "high": "That is elite baby energy.",
    "mid": "That is respectable baby territory.",
    "low": "That is barely any baby at all.",
    "cooldown": 3
});

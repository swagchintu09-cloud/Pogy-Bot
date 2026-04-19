const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "mysteriousrate",
    "aliases": [
        "mysteriousrate"
    ],
    "title": "Mysterious Rate",
    "description": "Check the mysterious level.",
    "usage": [
        "mysteriousrate <user>"
    ],
    "scale": "mysterious",
    "high": "That is elite mysterious energy.",
    "mid": "That is respectable mysterious territory.",
    "low": "That is barely any mysterious at all.",
    "cooldown": 3
});

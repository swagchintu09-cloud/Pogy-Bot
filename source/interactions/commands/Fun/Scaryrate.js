const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "scaryrate",
    "aliases": [
        "scaryrate"
    ],
    "title": "Scary Rate",
    "description": "Check the scary level.",
    "usage": [
        "scaryrate <user>"
    ],
    "scale": "scary",
    "high": "That is elite scary energy.",
    "mid": "That is respectable scary territory.",
    "low": "That is barely any scary at all.",
    "cooldown": 3
});

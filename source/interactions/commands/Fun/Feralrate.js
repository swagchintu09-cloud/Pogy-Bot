const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "feralrate",
    "aliases": [
        "feralrate"
    ],
    "title": "Feral Rate",
    "description": "Check the feral level.",
    "usage": [
        "feralrate <user>"
    ],
    "scale": "feral",
    "high": "That is elite feral energy.",
    "mid": "That is respectable feral territory.",
    "low": "That is barely any feral at all.",
    "cooldown": 3
});

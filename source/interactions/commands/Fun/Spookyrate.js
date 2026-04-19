const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "spookyrate",
    "aliases": [
        "spookyrate"
    ],
    "title": "Spooky Rate",
    "description": "Check the spooky level.",
    "usage": [
        "spookyrate <user>"
    ],
    "scale": "spooky",
    "high": "That is elite spooky energy.",
    "mid": "That is respectable spooky territory.",
    "low": "That is barely any spooky at all.",
    "cooldown": 3
});

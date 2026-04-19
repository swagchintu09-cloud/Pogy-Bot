const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "spicyrate",
    "aliases": [
        "spicyrate"
    ],
    "title": "Spicy Rate",
    "description": "Check the spicy level.",
    "usage": [
        "spicyrate <user>"
    ],
    "scale": "spicy",
    "high": "That is elite spicy energy.",
    "mid": "That is respectable spicy territory.",
    "low": "That is barely any spicy at all.",
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "piraterate",
    "aliases": [
        "piraterate"
    ],
    "title": "Pirate Rate",
    "description": "Check the pirate level.",
    "usage": [
        "piraterate <user>"
    ],
    "scale": "pirate",
    "high": "That is elite pirate energy.",
    "mid": "That is respectable pirate territory.",
    "low": "That is barely any pirate at all.",
    "cooldown": 3
});

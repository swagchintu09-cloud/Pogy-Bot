const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "nerdrate",
    "aliases": [
        "nerdrate"
    ],
    "title": "Nerd Rate",
    "description": "Check the nerd level.",
    "usage": [
        "nerdrate <user>"
    ],
    "scale": "nerd",
    "high": "That is elite nerd energy.",
    "mid": "That is respectable nerd territory.",
    "low": "That is barely any nerd at all.",
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "socialrate",
    "aliases": [
        "socialrate"
    ],
    "title": "Social Rate",
    "description": "Check the social level.",
    "usage": [
        "socialrate <user>"
    ],
    "scale": "social",
    "high": "That is elite social energy.",
    "mid": "That is respectable social territory.",
    "low": "That is barely any social at all.",
    "cooldown": 3
});

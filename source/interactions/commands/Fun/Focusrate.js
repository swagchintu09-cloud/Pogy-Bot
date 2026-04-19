const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "focusrate",
    "aliases": [
        "focusrate"
    ],
    "title": "Focus Rate",
    "description": "Check the focus level.",
    "usage": [
        "focusrate <user>"
    ],
    "scale": "focus",
    "high": "That is elite focus energy.",
    "mid": "That is respectable focus territory.",
    "low": "That is barely any focus at all.",
    "cooldown": 3
});

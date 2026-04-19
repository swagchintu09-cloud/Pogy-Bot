const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "menacerate",
    "aliases": [
        "menacerate"
    ],
    "title": "Menace Rate",
    "description": "Check the menace level.",
    "usage": [
        "menacerate <user>"
    ],
    "scale": "menace",
    "high": "That is elite menace energy.",
    "mid": "That is respectable menace territory.",
    "low": "That is barely any menace at all.",
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "cursedrate",
    "aliases": [
        "cursedrate"
    ],
    "title": "Cursed Rate",
    "description": "Check the cursed level.",
    "usage": [
        "cursedrate <user>"
    ],
    "scale": "cursed",
    "high": "That is elite cursed energy.",
    "mid": "That is respectable cursed territory.",
    "low": "That is barely any cursed at all.",
    "cooldown": 3
});

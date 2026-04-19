const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "adorablerate",
    "aliases": [
        "adorablerate"
    ],
    "title": "Adorable Rate",
    "description": "Check the adorable level.",
    "usage": [
        "adorablerate <user>"
    ],
    "scale": "adorable",
    "high": "That is elite adorable energy.",
    "mid": "That is respectable adorable territory.",
    "low": "That is barely any adorable at all.",
    "cooldown": 3
});

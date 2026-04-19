const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "coolrate",
    "aliases": [
        "coolrate"
    ],
    "title": "Cool Rate",
    "description": "Check the cool level.",
    "usage": [
        "coolrate <user>"
    ],
    "scale": "cool",
    "high": "That is elite cool energy.",
    "mid": "That is respectable cool territory.",
    "low": "That is barely any cool at all.",
    "cooldown": 3
});

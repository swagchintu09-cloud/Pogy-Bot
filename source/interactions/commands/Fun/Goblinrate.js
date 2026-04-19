const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "goblinrate",
    "aliases": [
        "goblinrate"
    ],
    "title": "Goblin Rate",
    "description": "Check the goblin level.",
    "usage": [
        "goblinrate <user>"
    ],
    "scale": "goblin",
    "high": "That is elite goblin energy.",
    "mid": "That is respectable goblin territory.",
    "low": "That is barely any goblin at all.",
    "cooldown": 3
});

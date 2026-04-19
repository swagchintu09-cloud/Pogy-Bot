const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "vampirerate",
    "aliases": [
        "vampirerate"
    ],
    "title": "Vampire Rate",
    "description": "Check the vampire level.",
    "usage": [
        "vampirerate <user>"
    ],
    "scale": "vampire",
    "high": "That is elite vampire energy.",
    "mid": "That is respectable vampire territory.",
    "low": "That is barely any vampire at all.",
    "cooldown": 3
});

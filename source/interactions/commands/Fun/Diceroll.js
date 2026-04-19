const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "diceroll",
    "aliases": [
        "diceroll"
    ],
    "title": "Dice Roll",
    "description": "Generate a random dice roll result.",
    "usage": [
        "diceroll"
    ],
    "intro": "The dice lands on:",
    "items": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6"
    ],
    "cooldown": 2
});

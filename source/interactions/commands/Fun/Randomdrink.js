const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "randomdrink",
    "aliases": [
        "randomdrink"
    ],
    "title": "Random Drink",
    "description": "Generate a random random drink result.",
    "usage": [
        "randomdrink"
    ],
    "intro": "Drink assigned:",
    "items": [
        "Iced coffee",
        "Matcha",
        "Lemon soda",
        "Hot chocolate",
        "Tea",
        "Sparkling water"
    ],
    "cooldown": 2
});

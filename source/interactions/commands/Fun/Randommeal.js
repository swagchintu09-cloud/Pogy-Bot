const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "randommeal",
    "aliases": [
        "randommeal"
    ],
    "title": "Random Meal",
    "description": "Generate a random random meal result.",
    "usage": [
        "randommeal"
    ],
    "intro": "Meal choice:",
    "items": [
        "Ramen",
        "Burrito",
        "Pasta",
        "Tacos",
        "Fried rice",
        "Breakfast sandwich"
    ],
    "cooldown": 2
});

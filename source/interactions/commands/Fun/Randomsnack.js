const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "randomsnack",
    "aliases": [
        "randomsnack"
    ],
    "title": "Random Snack",
    "description": "Generate a random random snack result.",
    "usage": [
        "randomsnack"
    ],
    "intro": "Snack assigned:",
    "items": [
        "Spicy chips",
        "Garlic bread",
        "Ice cream",
        "Trail mix",
        "Waffles",
        "Popcorn"
    ],
    "cooldown": 2
});

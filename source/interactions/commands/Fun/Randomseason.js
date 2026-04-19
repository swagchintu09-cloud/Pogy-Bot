const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "randomseason",
    "aliases": [
        "randomseason"
    ],
    "title": "Random Season",
    "description": "Generate a random random season result.",
    "usage": [
        "randomseason"
    ],
    "intro": "Season draw:",
    "items": [
        "Spring",
        "Summer",
        "Autumn",
        "Winter"
    ],
    "cooldown": 2
});

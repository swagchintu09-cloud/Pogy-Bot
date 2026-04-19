const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "randomplanet",
    "aliases": [
        "randomplanet"
    ],
    "title": "Random Planet",
    "description": "Generate a random random planet result.",
    "usage": [
        "randomplanet"
    ],
    "intro": "You have been assigned:",
    "items": [
        "Mercury",
        "Venus",
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune"
    ],
    "cooldown": 2
});

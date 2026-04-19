const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "randomweather",
    "aliases": [
        "randomweather"
    ],
    "title": "Random Weather",
    "description": "Generate a random random weather result.",
    "usage": [
        "randomweather"
    ],
    "intro": "Forecast says:",
    "items": [
        "Thunder and attitude",
        "Light rain and better decisions",
        "Pure sunshine",
        "Foggy overthinking",
        "Windy chaos"
    ],
    "cooldown": 2
});

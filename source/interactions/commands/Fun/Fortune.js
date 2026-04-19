const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "fortune",
    "aliases": [
        "fortune"
    ],
    "title": "Fortune",
    "description": "Generate a random fortune result.",
    "usage": [
        "fortune"
    ],
    "intro": "Your fortune for today:",
    "items": [
        "A lucky interruption is coming.",
        "Someone will quote you later.",
        "A bad idea will somehow work.",
        "Today rewards bold nonsense.",
        "You are about to overcook a tiny decision."
    ],
    "cooldown": 2
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "randomroom",
    "aliases": [
        "randomroom"
    ],
    "title": "Random Room",
    "description": "Generate a random random room result.",
    "usage": [
        "randomroom"
    ],
    "intro": "You unlock:",
    "items": [
        "Control room",
        "Secret library",
        "Game lounge",
        "Sky balcony",
        "Puzzle basement"
    ],
    "cooldown": 2
});

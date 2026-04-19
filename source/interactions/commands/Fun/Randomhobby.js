const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "randomhobby",
    "aliases": [
        "randomhobby"
    ],
    "title": "Random Hobby",
    "description": "Generate a random random hobby result.",
    "usage": [
        "randomhobby"
    ],
    "intro": "Hobby selected:",
    "items": [
        "Sketching",
        "Cooking",
        "Gaming",
        "Coding",
        "Gardening",
        "Photography"
    ],
    "cooldown": 2
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "randompet",
    "aliases": [
        "randompet"
    ],
    "title": "Random Pet",
    "description": "Generate a random random pet result.",
    "usage": [
        "randompet"
    ],
    "intro": "Pet assigned:",
    "items": [
        "Black cat",
        "Tiny dragon",
        "Ferret",
        "Golden retriever",
        "Frog",
        "Parrot"
    ],
    "cooldown": 2
});

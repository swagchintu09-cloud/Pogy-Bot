const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "randommood",
    "aliases": [
        "randommood"
    ],
    "title": "Random Mood",
    "description": "Generate a random random mood result.",
    "usage": [
        "randommood"
    ],
    "intro": "Mood check result:",
    "items": [
        "Locked in",
        "Floating",
        "Over it",
        "Chaotic good",
        "Dangerously inspired"
    ],
    "cooldown": 2
});

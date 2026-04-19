const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "randommission",
    "aliases": [
        "randommission"
    ],
    "title": "Random Mission",
    "description": "Generate a random random mission result.",
    "usage": [
        "randommission"
    ],
    "intro": "Mission of the hour:",
    "items": [
        "Protect the snack stash.",
        "Investigate the weird sound.",
        "Convince the room you know what you're doing.",
        "Escape the side quest.",
        "Win an argument with no facts."
    ],
    "cooldown": 2
});

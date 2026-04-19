const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "randomcurse",
    "aliases": [
        "randomcurse"
    ],
    "title": "Random Curse",
    "description": "Generate a random random curse result.",
    "usage": [
        "randomcurse"
    ],
    "intro": "Curse applied:",
    "items": [
        "Every chair squeaks under you.",
        "Your snacks vanish too quickly.",
        "You always open the wrong tab.",
        "Your timing is five seconds late.",
        "You overexplain everything today."
    ],
    "cooldown": 2
});

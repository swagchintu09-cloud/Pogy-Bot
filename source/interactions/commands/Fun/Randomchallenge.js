const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "randomchallenge",
    "aliases": [
        "randomchallenge"
    ],
    "title": "Random Challenge",
    "description": "Generate a random random challenge result.",
    "usage": [
        "randomchallenge"
    ],
    "intro": "Mini challenge:",
    "items": [
        "Drink water.",
        "Send one nice message.",
        "Stand up and stretch.",
        "Declutter one thing.",
        "Finish one small task."
    ],
    "cooldown": 2
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "randomquest",
    "aliases": [
        "randomquest"
    ],
    "title": "Random Quest",
    "description": "Generate a random random quest result.",
    "usage": [
        "randomquest"
    ],
    "intro": "Quest selected:",
    "items": [
        "Recover the missing playlist.",
        "Win the pet's trust.",
        "Decode the weird message.",
        "Survive the family group chat.",
        "Steal the crown back."
    ],
    "cooldown": 2
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "luckyletter",
    "aliases": [
        "luckyletter"
    ],
    "title": "Lucky Letter",
    "description": "Generate a random lucky letter result.",
    "usage": [
        "luckyletter"
    ],
    "intro": "Your lucky letter is:",
    "items": [
        "A",
        "D",
        "K",
        "M",
        "R",
        "S",
        "T",
        "Z"
    ],
    "cooldown": 2
});

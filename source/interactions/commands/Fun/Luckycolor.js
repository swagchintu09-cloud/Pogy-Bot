const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "luckycolor",
    "aliases": [
        "luckycolor"
    ],
    "title": "Lucky Color",
    "description": "Generate a random lucky color result.",
    "usage": [
        "luckycolor"
    ],
    "intro": "Today's lucky color is:",
    "items": [
        "Crimson",
        "Teal",
        "Gold",
        "Slate",
        "Coral",
        "Mint"
    ],
    "cooldown": 2
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "coinflip",
    "aliases": [
        "coinflip"
    ],
    "title": "Coin Flip",
    "description": "Generate a random coin flip result.",
    "usage": [
        "coinflip"
    ],
    "intro": "The coin says:",
    "items": [
        "Heads",
        "Tails"
    ],
    "cooldown": 2
});

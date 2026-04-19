const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "chaoticrate",
    "aliases": [
        "chaoticrate"
    ],
    "title": "Chaotic Rate",
    "description": "Check the chaotic level.",
    "usage": [
        "chaoticrate <user>"
    ],
    "scale": "chaotic",
    "high": "That is elite chaotic energy.",
    "mid": "That is respectable chaotic territory.",
    "low": "That is barely any chaotic at all.",
    "cooldown": 3
});

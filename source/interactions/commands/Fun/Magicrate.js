const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "magicrate",
    "aliases": [
        "magicrate"
    ],
    "title": "Magic Rate",
    "description": "Check the magic level.",
    "usage": [
        "magicrate <user>"
    ],
    "scale": "magic",
    "high": "That is elite magic energy.",
    "mid": "That is respectable magic territory.",
    "low": "That is barely any magic at all.",
    "cooldown": 3
});

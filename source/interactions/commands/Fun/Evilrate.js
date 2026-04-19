const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "evilrate",
    "aliases": [
        "evilrate"
    ],
    "title": "Evil Rate",
    "description": "Check the evil level.",
    "usage": [
        "evilrate <user>"
    ],
    "scale": "evil",
    "high": "That is elite evil energy.",
    "mid": "That is respectable evil territory.",
    "low": "That is barely any evil at all.",
    "cooldown": 3
});

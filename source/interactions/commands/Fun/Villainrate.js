const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "villainrate",
    "aliases": [
        "villainrate"
    ],
    "title": "Villain Rate",
    "description": "Check the villain level.",
    "usage": [
        "villainrate <user>"
    ],
    "scale": "villain",
    "high": "That is elite villain energy.",
    "mid": "That is respectable villain territory.",
    "low": "That is barely any villain at all.",
    "cooldown": 3
});

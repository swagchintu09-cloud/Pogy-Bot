const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "happyrate",
    "aliases": [
        "happyrate"
    ],
    "title": "Happy Rate",
    "description": "Check the happy level.",
    "usage": [
        "happyrate <user>"
    ],
    "scale": "happy",
    "high": "That is elite happy energy.",
    "mid": "That is respectable happy territory.",
    "low": "That is barely any happy at all.",
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "swagrate",
    "aliases": [
        "swagrate"
    ],
    "title": "Swag Rate",
    "description": "Check the swag level.",
    "usage": [
        "swagrate <user>"
    ],
    "scale": "swag",
    "high": "That is elite swag energy.",
    "mid": "That is respectable swag territory.",
    "low": "That is barely any swag at all.",
    "cooldown": 3
});

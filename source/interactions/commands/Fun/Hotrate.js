const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "hotrate",
    "aliases": [
        "hotrate"
    ],
    "title": "Hot Rate",
    "description": "Check the hot level.",
    "usage": [
        "hotrate <user>"
    ],
    "scale": "hot",
    "high": "That is elite hot energy.",
    "mid": "That is respectable hot territory.",
    "low": "That is barely any hot at all.",
    "cooldown": 3
});

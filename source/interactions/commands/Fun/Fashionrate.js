const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "fashionrate",
    "aliases": [
        "fashionrate"
    ],
    "title": "Fashion Rate",
    "description": "Check the fashion level.",
    "usage": [
        "fashionrate <user>"
    ],
    "scale": "fashion",
    "high": "That is elite fashion energy.",
    "mid": "That is respectable fashion territory.",
    "low": "That is barely any fashion at all.",
    "cooldown": 3
});

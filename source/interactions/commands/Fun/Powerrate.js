const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "powerrate",
    "aliases": [
        "powerrate"
    ],
    "title": "Power Rate",
    "description": "Check the power level.",
    "usage": [
        "powerrate <user>"
    ],
    "scale": "power",
    "high": "That is elite power energy.",
    "mid": "That is respectable power territory.",
    "low": "That is barely any power at all.",
    "cooldown": 3
});

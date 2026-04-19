const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "dangerousrate",
    "aliases": [
        "dangerousrate"
    ],
    "title": "Dangerous Rate",
    "description": "Check the dangerous level.",
    "usage": [
        "dangerousrate <user>"
    ],
    "scale": "dangerous",
    "high": "That is elite dangerous energy.",
    "mid": "That is respectable dangerous territory.",
    "low": "That is barely any dangerous at all.",
    "cooldown": 3
});

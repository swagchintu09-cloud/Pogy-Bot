const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "starrate",
    "aliases": [
        "starrate"
    ],
    "title": "Star Rate",
    "description": "Check the star level.",
    "usage": [
        "starrate <user>"
    ],
    "scale": "star",
    "high": "That is elite star energy.",
    "mid": "That is respectable star territory.",
    "low": "That is barely any star at all.",
    "cooldown": 3
});

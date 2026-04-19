const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "energyrate",
    "aliases": [
        "energyrate"
    ],
    "title": "Energy Rate",
    "description": "Check the energy level.",
    "usage": [
        "energyrate <user>"
    ],
    "scale": "energy",
    "high": "That is elite energy energy.",
    "mid": "That is respectable energy territory.",
    "low": "That is barely any energy at all.",
    "cooldown": 3
});

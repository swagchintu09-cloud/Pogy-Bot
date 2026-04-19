const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "grumpyrate",
    "aliases": [
        "grumpyrate"
    ],
    "title": "Grumpy Rate",
    "description": "Check the grumpy level.",
    "usage": [
        "grumpyrate <user>"
    ],
    "scale": "grumpy",
    "high": "That is elite grumpy energy.",
    "mid": "That is respectable grumpy territory.",
    "low": "That is barely any grumpy at all.",
    "cooldown": 3
});

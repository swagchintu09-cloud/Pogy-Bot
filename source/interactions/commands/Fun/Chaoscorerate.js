const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "chaoscorerate",
    "aliases": [
        "chaoscorerate"
    ],
    "title": "ChaosCore Rate",
    "description": "Check the chaos core level.",
    "usage": [
        "chaoscorerate <user>"
    ],
    "scale": "chaos core",
    "high": "That is elite chaos core energy.",
    "mid": "That is respectable chaos core territory.",
    "low": "That is barely any chaos core at all.",
    "cooldown": 3
});

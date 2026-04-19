const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "alienrate",
    "aliases": [
        "alienrate"
    ],
    "title": "Alien Rate",
    "description": "Check the alien level.",
    "usage": [
        "alienrate <user>"
    ],
    "scale": "alien",
    "high": "That is elite alien energy.",
    "mid": "That is respectable alien territory.",
    "low": "That is barely any alien at all.",
    "cooldown": 3
});

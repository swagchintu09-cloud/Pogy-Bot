const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "geniusrate",
    "aliases": [
        "geniusrate"
    ],
    "title": "Genius Rate",
    "description": "Check the genius level.",
    "usage": [
        "geniusrate <user>"
    ],
    "scale": "genius",
    "high": "That is elite genius energy.",
    "mid": "That is respectable genius territory.",
    "low": "That is barely any genius at all.",
    "cooldown": 3
});

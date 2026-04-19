const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "driprate",
    "aliases": [
        "driprate"
    ],
    "title": "Drip Rate",
    "description": "Check the drip level.",
    "usage": [
        "driprate <user>"
    ],
    "scale": "drip",
    "high": "That is elite drip energy.",
    "mid": "That is respectable drip territory.",
    "low": "That is barely any drip at all.",
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "beastrate",
    "aliases": [
        "beastrate"
    ],
    "title": "Beast Rate",
    "description": "Check the beast level.",
    "usage": [
        "beastrate <user>"
    ],
    "scale": "beast",
    "high": "That is elite beast energy.",
    "mid": "That is respectable beast territory.",
    "low": "That is barely any beast at all.",
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "ghostrate",
    "aliases": [
        "ghostrate"
    ],
    "title": "Ghost Rate",
    "description": "Check the ghost level.",
    "usage": [
        "ghostrate <user>"
    ],
    "scale": "ghost",
    "high": "That is elite ghost energy.",
    "mid": "That is respectable ghost territory.",
    "low": "That is barely any ghost at all.",
    "cooldown": 3
});

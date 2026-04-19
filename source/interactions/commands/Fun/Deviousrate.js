const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "deviousrate",
    "aliases": [
        "deviousrate"
    ],
    "title": "Devious Rate",
    "description": "Check the devious level.",
    "usage": [
        "deviousrate <user>"
    ],
    "scale": "devious",
    "high": "That is elite devious energy.",
    "mid": "That is respectable devious territory.",
    "low": "That is barely any devious at all.",
    "cooldown": 3
});

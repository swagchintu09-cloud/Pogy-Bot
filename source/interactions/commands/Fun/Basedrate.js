const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "basedrate",
    "aliases": [
        "basedrate"
    ],
    "title": "Based Rate",
    "description": "Check the based level.",
    "usage": [
        "basedrate <user>"
    ],
    "scale": "based",
    "high": "That is elite based energy.",
    "mid": "That is respectable based territory.",
    "low": "That is barely any based at all.",
    "cooldown": 3
});

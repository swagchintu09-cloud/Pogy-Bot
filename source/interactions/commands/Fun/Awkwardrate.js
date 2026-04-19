const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "awkwardrate",
    "aliases": [
        "awkwardrate"
    ],
    "title": "Awkward Rate",
    "description": "Check the awkward level.",
    "usage": [
        "awkwardrate <user>"
    ],
    "scale": "awkward",
    "high": "That is elite awkward energy.",
    "mid": "That is respectable awkward territory.",
    "low": "That is barely any awkward at all.",
    "cooldown": 3
});

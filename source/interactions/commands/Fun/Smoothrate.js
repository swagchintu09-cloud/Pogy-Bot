const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "smoothrate",
    "aliases": [
        "smoothrate"
    ],
    "title": "Smooth Rate",
    "description": "Check the smooth level.",
    "usage": [
        "smoothrate <user>"
    ],
    "scale": "smooth",
    "high": "That is elite smooth energy.",
    "mid": "That is respectable smooth territory.",
    "low": "That is barely any smooth at all.",
    "cooldown": 3
});

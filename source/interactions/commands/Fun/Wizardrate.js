const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "wizardrate",
    "aliases": [
        "wizardrate"
    ],
    "title": "Wizard Rate",
    "description": "Check the wizard level.",
    "usage": [
        "wizardrate <user>"
    ],
    "scale": "wizard",
    "high": "That is elite wizard energy.",
    "mid": "That is respectable wizard territory.",
    "low": "That is barely any wizard at all.",
    "cooldown": 3
});

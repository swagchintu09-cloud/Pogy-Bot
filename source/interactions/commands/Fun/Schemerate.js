const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "schemerate",
    "aliases": [
        "schemerate"
    ],
    "title": "Scheme Rate",
    "description": "Check the scheme level.",
    "usage": [
        "schemerate <user>"
    ],
    "scale": "scheme",
    "high": "That is elite scheme energy.",
    "mid": "That is respectable scheme territory.",
    "low": "That is barely any scheme at all.",
    "cooldown": 3
});

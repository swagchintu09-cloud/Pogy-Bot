const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "royaltyrate",
    "aliases": [
        "royaltyrate"
    ],
    "title": "Royalty Rate",
    "description": "Check the royalty level.",
    "usage": [
        "royaltyrate <user>"
    ],
    "scale": "royalty",
    "high": "That is elite royalty energy.",
    "mid": "That is respectable royalty territory.",
    "low": "That is barely any royalty at all.",
    "cooldown": 3
});

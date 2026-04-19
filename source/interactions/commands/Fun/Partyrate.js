const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "partyrate",
    "aliases": [
        "partyrate"
    ],
    "title": "Party Rate",
    "description": "Check the party level.",
    "usage": [
        "partyrate <user>"
    ],
    "scale": "party",
    "high": "That is elite party energy.",
    "mid": "That is respectable party territory.",
    "low": "That is barely any party at all.",
    "cooldown": 3
});

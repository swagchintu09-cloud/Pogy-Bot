const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "overthinkrate",
    "aliases": [
        "overthinkrate"
    ],
    "title": "Overthink Rate",
    "description": "Check the overthink level.",
    "usage": [
        "overthinkrate <user>"
    ],
    "scale": "overthink",
    "high": "That is elite overthink energy.",
    "mid": "That is respectable overthink territory.",
    "low": "That is barely any overthink at all.",
    "cooldown": 3
});

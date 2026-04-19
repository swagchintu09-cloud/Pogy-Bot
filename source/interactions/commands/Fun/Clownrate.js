const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "clownrate",
    "aliases": [
        "clownrate"
    ],
    "title": "Clown Rate",
    "description": "Check the clown level.",
    "usage": [
        "clownrate <user>"
    ],
    "scale": "clown",
    "high": "That is elite clown energy.",
    "mid": "That is respectable clown territory.",
    "low": "That is barely any clown at all.",
    "cooldown": 3
});

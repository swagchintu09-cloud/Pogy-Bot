const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "goofyrate",
    "aliases": [
        "goofyrate"
    ],
    "title": "Goofy Rate",
    "description": "Check the goofy level.",
    "usage": [
        "goofyrate <user>"
    ],
    "scale": "goofy",
    "high": "That is elite goofy energy.",
    "mid": "That is respectable goofy territory.",
    "low": "That is barely any goofy at all.",
    "cooldown": 3
});

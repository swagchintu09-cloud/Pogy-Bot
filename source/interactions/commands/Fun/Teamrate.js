const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "teamrate",
    "aliases": [
        "teamrate"
    ],
    "title": "Team Rate",
    "description": "Check the team level.",
    "usage": [
        "teamrate <user>"
    ],
    "scale": "team",
    "high": "That is elite team energy.",
    "mid": "That is respectable team territory.",
    "low": "That is barely any team at all.",
    "cooldown": 3
});

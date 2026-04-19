const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "sweetheartrate",
    "aliases": [
        "sweetheartrate"
    ],
    "title": "Sweetheart Rate",
    "description": "Check the sweetheart level.",
    "usage": [
        "sweetheartrate <user>"
    ],
    "scale": "sweetheart",
    "high": "That is elite sweetheart energy.",
    "mid": "That is respectable sweetheart territory.",
    "low": "That is barely any sweetheart at all.",
    "cooldown": 3
});

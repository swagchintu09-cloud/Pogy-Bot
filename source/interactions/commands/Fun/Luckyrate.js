const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "luckyrate",
    "aliases": [
        "luckyrate"
    ],
    "title": "Lucky Rate",
    "description": "Check the lucky level.",
    "usage": [
        "luckyrate <user>"
    ],
    "scale": "lucky",
    "high": "That is elite lucky energy.",
    "mid": "That is respectable lucky territory.",
    "low": "That is barely any lucky at all.",
    "cooldown": 3
});

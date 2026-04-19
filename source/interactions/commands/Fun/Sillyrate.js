const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "sillyrate",
    "aliases": [
        "sillyrate"
    ],
    "title": "Silly Rate",
    "description": "Check the silly level.",
    "usage": [
        "sillyrate <user>"
    ],
    "scale": "silly",
    "high": "That is elite silly energy.",
    "mid": "That is respectable silly territory.",
    "low": "That is barely any silly at all.",
    "cooldown": 3
});

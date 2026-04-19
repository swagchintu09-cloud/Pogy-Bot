const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "snackrate",
    "aliases": [
        "snackrate"
    ],
    "title": "Snack Rate",
    "description": "Check the snack level.",
    "usage": [
        "snackrate <user>"
    ],
    "scale": "snack",
    "high": "That is elite snack energy.",
    "mid": "That is respectable snack territory.",
    "low": "That is barely any snack at all.",
    "cooldown": 3
});

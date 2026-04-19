const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "memerate",
    "aliases": [
        "memerate"
    ],
    "title": "Meme Rate",
    "description": "Check the meme level.",
    "usage": [
        "memerate <user>"
    ],
    "scale": "meme",
    "high": "That is elite meme energy.",
    "mid": "That is respectable meme territory.",
    "low": "That is barely any meme at all.",
    "cooldown": 3
});

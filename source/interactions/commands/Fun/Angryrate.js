const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "angryrate",
    "aliases": [
        "angryrate"
    ],
    "title": "Angry Rate",
    "description": "Check the angry level.",
    "usage": [
        "angryrate <user>"
    ],
    "scale": "angry",
    "high": "That is elite angry energy.",
    "mid": "That is respectable angry territory.",
    "low": "That is barely any angry at all.",
    "cooldown": 3
});

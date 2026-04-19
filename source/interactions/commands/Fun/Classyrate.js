const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "classyrate",
    "aliases": [
        "classyrate"
    ],
    "title": "Classy Rate",
    "description": "Check the classy level.",
    "usage": [
        "classyrate <user>"
    ],
    "scale": "classy",
    "high": "That is elite classy energy.",
    "mid": "That is respectable classy territory.",
    "low": "That is barely any classy at all.",
    "cooldown": 3
});

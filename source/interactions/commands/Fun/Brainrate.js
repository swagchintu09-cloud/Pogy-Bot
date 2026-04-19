const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "brainrate",
    "aliases": [
        "brainrate"
    ],
    "title": "Brain Rate",
    "description": "Check the brain level.",
    "usage": [
        "brainrate <user>"
    ],
    "scale": "brain",
    "high": "That is elite brain energy.",
    "mid": "That is respectable brain territory.",
    "low": "That is barely any brain at all.",
    "cooldown": 3
});

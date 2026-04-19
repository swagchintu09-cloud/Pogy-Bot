const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "sleepyrate",
    "aliases": [
        "sleepyrate"
    ],
    "title": "Sleepy Rate",
    "description": "Check the sleepy level.",
    "usage": [
        "sleepyrate <user>"
    ],
    "scale": "sleepy",
    "high": "That is elite sleepy energy.",
    "mid": "That is respectable sleepy territory.",
    "low": "That is barely any sleepy at all.",
    "cooldown": 3
});

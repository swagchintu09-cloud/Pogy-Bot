const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "luckyday",
    "aliases": [
        "luckyday"
    ],
    "title": "Lucky Day",
    "description": "Generate a random lucky day result.",
    "usage": [
        "luckyday"
    ],
    "intro": "Your power day is:",
    "items": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],
    "cooldown": 2
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "squishtext",
    "aliases": [
        "squishtext"
    ],
    "title": "Squish Text",
    "description": "Transform text using squish text.",
    "usage": [
        "squishtext <text>"
    ],
    "transform": "squishtext",
    "cooldown": 2
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "mocktext",
    "aliases": [
        "mocktext"
    ],
    "title": "Mock Text",
    "description": "Transform text using mock text.",
    "usage": [
        "mocktext <text>"
    ],
    "transform": "mocktext",
    "cooldown": 2
});

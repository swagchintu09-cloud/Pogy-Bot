const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "dottext",
    "aliases": [
        "dottext"
    ],
    "title": "Dot Text",
    "description": "Transform text using dot text.",
    "usage": [
        "dottext <text>"
    ],
    "transform": "dottext",
    "cooldown": 2
});

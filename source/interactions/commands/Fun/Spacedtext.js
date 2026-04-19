const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "spacedtext",
    "aliases": [
        "spacedtext"
    ],
    "title": "Spaced Text",
    "description": "Transform text using spaced text.",
    "usage": [
        "spacedtext <text>"
    ],
    "transform": "spacedtext",
    "cooldown": 2
});

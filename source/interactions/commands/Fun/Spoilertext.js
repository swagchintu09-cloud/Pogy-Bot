const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "spoilertext",
    "aliases": [
        "spoilertext"
    ],
    "title": "Spoiler Text",
    "description": "Transform text using spoiler text.",
    "usage": [
        "spoilertext <text>"
    ],
    "transform": "spoilertext",
    "cooldown": 2
});

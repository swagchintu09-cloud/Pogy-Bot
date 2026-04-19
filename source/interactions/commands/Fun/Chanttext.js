const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "chanttext",
    "aliases": [
        "chanttext"
    ],
    "title": "Chant Text",
    "description": "Transform text using chant text.",
    "usage": [
        "chanttext <text>"
    ],
    "transform": "chanttext",
    "cooldown": 2
});

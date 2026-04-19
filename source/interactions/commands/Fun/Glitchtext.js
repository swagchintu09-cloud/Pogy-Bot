const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "glitchtext",
    "aliases": [
        "glitchtext"
    ],
    "title": "Glitch Text",
    "description": "Transform text using glitch text.",
    "usage": [
        "glitchtext <text>"
    ],
    "transform": "glitchtext",
    "cooldown": 2
});

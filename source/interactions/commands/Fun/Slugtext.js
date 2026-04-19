const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "slugtext",
    "aliases": [
        "slugtext"
    ],
    "title": "Slug Text",
    "description": "Transform text using slug text.",
    "usage": [
        "slugtext <text>"
    ],
    "transform": "slugtext",
    "cooldown": 2
});

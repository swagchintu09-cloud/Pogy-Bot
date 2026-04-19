const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "alternatetext",
    "aliases": [
        "alternatetext"
    ],
    "title": "Alternate Text",
    "description": "Transform text using alternate text.",
    "usage": [
        "alternatetext <text>"
    ],
    "transform": "alternatetext",
    "cooldown": 2
});

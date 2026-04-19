const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "stretchtext",
    "aliases": [
        "stretchtext"
    ],
    "title": "Stretch Text",
    "description": "Transform text using stretch text.",
    "usage": [
        "stretchtext <text>"
    ],
    "transform": "stretchtext",
    "cooldown": 2
});

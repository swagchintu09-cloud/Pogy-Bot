const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "boxtext",
    "aliases": [
        "boxtext"
    ],
    "title": "Box Text",
    "description": "Transform text using box text.",
    "usage": [
        "boxtext <text>"
    ],
    "transform": "boxtext",
    "cooldown": 2
});

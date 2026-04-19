const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "uppercase",
    "aliases": [
        "uppercase"
    ],
    "title": "Uppercase Text",
    "description": "Transform text using uppercase text.",
    "usage": [
        "uppercase <text>"
    ],
    "transform": "uppercase",
    "cooldown": 2
});

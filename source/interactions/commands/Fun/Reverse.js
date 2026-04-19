const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "reverse",
    "aliases": [
        "reverse"
    ],
    "title": "Reverse Text",
    "description": "Transform text using reverse text.",
    "usage": [
        "reverse <text>"
    ],
    "transform": "reverse",
    "cooldown": 2
});

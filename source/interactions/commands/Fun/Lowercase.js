const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "lowercase",
    "aliases": [
        "lowercase"
    ],
    "title": "Lowercase Text",
    "description": "Transform text using lowercase text.",
    "usage": [
        "lowercase <text>"
    ],
    "transform": "lowercase",
    "cooldown": 2
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "titleize",
    "aliases": [
        "titleize"
    ],
    "title": "Titleize",
    "description": "Transform text using titleize.",
    "usage": [
        "titleize <text>"
    ],
    "transform": "titleize",
    "cooldown": 2
});

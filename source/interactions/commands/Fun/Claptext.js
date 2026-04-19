const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "claptext",
    "aliases": [
        "claptext"
    ],
    "title": "Clap Text",
    "description": "Transform text using clap text.",
    "usage": [
        "claptext <text>"
    ],
    "transform": "claptext",
    "cooldown": 2
});

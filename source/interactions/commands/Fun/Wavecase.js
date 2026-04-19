const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "wavecase",
    "aliases": [
        "wavecase"
    ],
    "title": "Wave Case",
    "description": "Transform text using wave case.",
    "usage": [
        "wavecase <text>"
    ],
    "transform": "wavecase",
    "cooldown": 2
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "sentencecase",
    "aliases": [
        "sentencecase"
    ],
    "title": "Sentence Case",
    "description": "Transform text using sentence case.",
    "usage": [
        "sentencecase <text>"
    ],
    "transform": "sentencecase",
    "cooldown": 2
});

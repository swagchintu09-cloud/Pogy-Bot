const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "swapcase",
    "aliases": [
        "swapcase"
    ],
    "title": "Swap Case",
    "description": "Transform text using swap case.",
    "usage": [
        "swapcase <text>"
    ],
    "transform": "swapcase",
    "cooldown": 2
});

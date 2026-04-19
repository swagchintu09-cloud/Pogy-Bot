const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "blockcaps",
    "aliases": [
        "blockcaps"
    ],
    "title": "Block Caps",
    "description": "Transform text using block caps.",
    "usage": [
        "blockcaps <text>"
    ],
    "transform": "blockcaps",
    "cooldown": 2
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "mirrorwords",
    "aliases": [
        "mirrorwords"
    ],
    "title": "Mirror Words",
    "description": "Transform text using mirror words.",
    "usage": [
        "mirrorwords <text>"
    ],
    "transform": "mirrorwords",
    "cooldown": 2
});

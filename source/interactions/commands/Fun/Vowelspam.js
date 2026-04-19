const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "transform",
    "name": "vowelspam",
    "aliases": [
        "vowelspam"
    ],
    "title": "Vowel Spam",
    "description": "Transform text using vowel spam.",
    "usage": [
        "vowelspam <text>"
    ],
    "transform": "vowelspam",
    "cooldown": 2
});

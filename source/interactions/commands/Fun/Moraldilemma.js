const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "moraldilemma",
    "aliases": [
        "moraldilemma"
    ],
    "title": "Moral Dilemma",
    "description": "Get a random moral dilemma prompt.",
    "usage": [
        "moraldilemma"
    ],
    "prompts": [
        "What is one moral dilemma you would share with this server right now?",
        "What is your most honest moral dilemma when nobody is judging?",
        "What is a chaotic moral dilemma you would still defend?",
        "What is the funniest moral dilemma answer you could give here?",
        "What moral dilemma would instantly start a full conversation?"
    ],
    "cooldown": 3
});

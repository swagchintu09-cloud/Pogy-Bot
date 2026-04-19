const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "daydream",
    "aliases": [
        "daydream"
    ],
    "title": "Daydream",
    "description": "Get a random daydream prompt.",
    "usage": [
        "daydream"
    ],
    "prompts": [
        "What is one daydream you would share with this server right now?",
        "What is your most honest daydream when nobody is judging?",
        "What is a chaotic daydream you would still defend?",
        "What is the funniest daydream answer you could give here?",
        "What daydream would instantly start a full conversation?"
    ],
    "cooldown": 3
});

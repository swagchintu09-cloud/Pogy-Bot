const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "trustquestion",
    "aliases": [
        "trustquestion"
    ],
    "title": "Trust Question",
    "description": "Get a random trust answer prompt.",
    "usage": [
        "trustquestion"
    ],
    "prompts": [
        "What is one trust answer you would share with this server right now?",
        "What is your most honest trust answer when nobody is judging?",
        "What is a chaotic trust answer you would still defend?",
        "What is the funniest trust answer answer you could give here?",
        "What trust answer would instantly start a full conversation?"
    ],
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "chaosquestion",
    "aliases": [
        "chaosquestion"
    ],
    "title": "Chaos Question",
    "description": "Get a random chaotic choice prompt.",
    "usage": [
        "chaosquestion"
    ],
    "prompts": [
        "What is one chaotic choice you would share with this server right now?",
        "What is your most honest chaotic choice when nobody is judging?",
        "What is a chaotic chaotic choice you would still defend?",
        "What is the funniest chaotic choice answer you could give here?",
        "What chaotic choice would instantly start a full conversation?"
    ],
    "cooldown": 3
});

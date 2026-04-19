const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "crushquestion",
    "aliases": [
        "crushquestion"
    ],
    "title": "Crush Question",
    "description": "Get a random crush-related answer prompt.",
    "usage": [
        "crushquestion"
    ],
    "prompts": [
        "What is one crush-related answer you would share with this server right now?",
        "What is your most honest crush-related answer when nobody is judging?",
        "What is a chaotic crush-related answer you would still defend?",
        "What is the funniest crush-related answer answer you could give here?",
        "What crush-related answer would instantly start a full conversation?"
    ],
    "cooldown": 3
});

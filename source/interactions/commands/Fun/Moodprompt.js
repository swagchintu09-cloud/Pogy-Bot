const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "moodprompt",
    "aliases": [
        "moodprompt"
    ],
    "title": "Mood Prompt",
    "description": "Get a random mood prompt.",
    "usage": [
        "moodprompt"
    ],
    "prompts": [
        "What is one mood you would share with this server right now?",
        "What is your most honest mood when nobody is judging?",
        "What is a chaotic mood you would still defend?",
        "What is the funniest mood answer you could give here?",
        "What mood would instantly start a full conversation?"
    ],
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "hottake",
    "aliases": [
        "hottake"
    ],
    "title": "Hot Take",
    "description": "Get a random hot take prompt.",
    "usage": [
        "hottake"
    ],
    "prompts": [
        "What is one hot take you would share with this server right now?",
        "What is your most honest hot take when nobody is judging?",
        "What is a chaotic hot take you would still defend?",
        "What is the funniest hot take answer you could give here?",
        "What hot take would instantly start a full conversation?"
    ],
    "cooldown": 3
});

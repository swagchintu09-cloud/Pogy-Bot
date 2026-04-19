const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "greenflag",
    "aliases": [
        "greenflag"
    ],
    "title": "Green Flag",
    "description": "Get a random green flag prompt.",
    "usage": [
        "greenflag"
    ],
    "prompts": [
        "What is one green flag you would share with this server right now?",
        "What is your most honest green flag when nobody is judging?",
        "What is a chaotic green flag you would still defend?",
        "What is the funniest green flag answer you could give here?",
        "What green flag would instantly start a full conversation?"
    ],
    "cooldown": 3
});

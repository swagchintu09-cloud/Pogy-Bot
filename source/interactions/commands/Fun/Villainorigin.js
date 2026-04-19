const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "villainorigin",
    "aliases": [
        "villainorigin"
    ],
    "title": "Villain Origin",
    "description": "Get a random villain origin story prompt.",
    "usage": [
        "villainorigin"
    ],
    "prompts": [
        "What is one villain origin story you would share with this server right now?",
        "What is your most honest villain origin story when nobody is judging?",
        "What is a chaotic villain origin story you would still defend?",
        "What is the funniest villain origin story answer you could give here?",
        "What villain origin story would instantly start a full conversation?"
    ],
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "truthbomb",
    "aliases": [
        "truthbomb"
    ],
    "title": "Truth Bomb",
    "description": "Get a random truth bomb prompt.",
    "usage": [
        "truthbomb"
    ],
    "prompts": [
        "What is one truth bomb you would share with this server right now?",
        "What is your most honest truth bomb when nobody is judging?",
        "What is a chaotic truth bomb you would still defend?",
        "What is the funniest truth bomb answer you could give here?",
        "What truth bomb would instantly start a full conversation?"
    ],
    "cooldown": 3
});

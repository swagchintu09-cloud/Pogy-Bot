const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "guiltypleasure",
    "aliases": [
        "guiltypleasure"
    ],
    "title": "Guilty Pleasure",
    "description": "Get a random guilty pleasure prompt.",
    "usage": [
        "guiltypleasure"
    ],
    "prompts": [
        "What is one guilty pleasure you would share with this server right now?",
        "What is your most honest guilty pleasure when nobody is judging?",
        "What is a chaotic guilty pleasure you would still defend?",
        "What is the funniest guilty pleasure answer you could give here?",
        "What guilty pleasure would instantly start a full conversation?"
    ],
    "cooldown": 3
});

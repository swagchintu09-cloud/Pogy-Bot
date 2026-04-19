const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "heroorigin",
    "aliases": [
        "heroorigin"
    ],
    "title": "Hero Origin",
    "description": "Get a random hero origin story prompt.",
    "usage": [
        "heroorigin"
    ],
    "prompts": [
        "What is one hero origin story you would share with this server right now?",
        "What is your most honest hero origin story when nobody is judging?",
        "What is a chaotic hero origin story you would still defend?",
        "What is the funniest hero origin story answer you could give here?",
        "What hero origin story would instantly start a full conversation?"
    ],
    "cooldown": 3
});

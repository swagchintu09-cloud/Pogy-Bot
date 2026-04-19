const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "debatebait",
    "aliases": [
        "debatebait"
    ],
    "title": "Debate Bait",
    "description": "Get a random debate topic prompt.",
    "usage": [
        "debatebait"
    ],
    "prompts": [
        "What is one debate topic you would share with this server right now?",
        "What is your most honest debate topic when nobody is judging?",
        "What is a chaotic debate topic you would still defend?",
        "What is the funniest debate topic answer you could give here?",
        "What debate topic would instantly start a full conversation?"
    ],
    "cooldown": 3
});

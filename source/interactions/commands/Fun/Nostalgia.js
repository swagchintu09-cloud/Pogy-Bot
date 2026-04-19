const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "nostalgia",
    "aliases": [
        "nostalgia"
    ],
    "title": "Nostalgia",
    "description": "Get a random nostalgic memory prompt.",
    "usage": [
        "nostalgia"
    ],
    "prompts": [
        "What is one nostalgic memory you would share with this server right now?",
        "What is your most honest nostalgic memory when nobody is judging?",
        "What is a chaotic nostalgic memory you would still defend?",
        "What is the funniest nostalgic memory answer you could give here?",
        "What nostalgic memory would instantly start a full conversation?"
    ],
    "cooldown": 3
});

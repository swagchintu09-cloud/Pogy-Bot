const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "fictionalfriend",
    "aliases": [
        "fictionalfriend"
    ],
    "title": "Fictional Friend",
    "description": "Get a random fictional friend pick prompt.",
    "usage": [
        "fictionalfriend"
    ],
    "prompts": [
        "What is one fictional friend pick you would share with this server right now?",
        "What is your most honest fictional friend pick when nobody is judging?",
        "What is a chaotic fictional friend pick you would still defend?",
        "What is the funniest fictional friend pick answer you could give here?",
        "What fictional friend pick would instantly start a full conversation?"
    ],
    "cooldown": 3
});

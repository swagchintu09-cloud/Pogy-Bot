const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "showerthought",
    "aliases": [
        "showerthought"
    ],
    "title": "Shower Thought",
    "description": "Get a random shower thought prompt.",
    "usage": [
        "showerthought"
    ],
    "prompts": [
        "What is one shower thought you would share with this server right now?",
        "What is your most honest shower thought when nobody is judging?",
        "What is a chaotic shower thought you would still defend?",
        "What is the funniest shower thought answer you could give here?",
        "What shower thought would instantly start a full conversation?"
    ],
    "cooldown": 3
});

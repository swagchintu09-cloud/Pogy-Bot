const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "midnightthought",
    "aliases": [
        "midnightthought"
    ],
    "title": "Midnight Thought",
    "description": "Get a random midnight thought prompt.",
    "usage": [
        "midnightthought"
    ],
    "prompts": [
        "What is one midnight thought you would share with this server right now?",
        "What is your most honest midnight thought when nobody is judging?",
        "What is a chaotic midnight thought you would still defend?",
        "What is the funniest midnight thought answer you could give here?",
        "What midnight thought would instantly start a full conversation?"
    ],
    "cooldown": 3
});

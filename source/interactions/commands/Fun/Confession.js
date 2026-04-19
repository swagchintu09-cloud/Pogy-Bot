const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "confession",
    "aliases": [
        "confession"
    ],
    "title": "Confession",
    "description": "Get a random confession prompt.",
    "usage": [
        "confession"
    ],
    "prompts": [
        "What is one confession you would share with this server right now?",
        "What is your most honest confession when nobody is judging?",
        "What is a chaotic confession you would still defend?",
        "What is the funniest confession answer you could give here?",
        "What confession would instantly start a full conversation?"
    ],
    "cooldown": 3
});

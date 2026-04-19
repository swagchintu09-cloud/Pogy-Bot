const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "lifelesson",
    "aliases": [
        "lifelesson"
    ],
    "title": "Life Lesson",
    "description": "Get a random life lesson prompt.",
    "usage": [
        "lifelesson"
    ],
    "prompts": [
        "What is one life lesson you would share with this server right now?",
        "What is your most honest life lesson when nobody is judging?",
        "What is a chaotic life lesson you would still defend?",
        "What is the funniest life lesson answer you could give here?",
        "What life lesson would instantly start a full conversation?"
    ],
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "firstimpression",
    "aliases": [
        "firstimpression"
    ],
    "title": "First Impression",
    "description": "Get a random first impression prompt.",
    "usage": [
        "firstimpression"
    ],
    "prompts": [
        "What is one first impression you would share with this server right now?",
        "What is your most honest first impression when nobody is judging?",
        "What is a chaotic first impression you would still defend?",
        "What is the funniest first impression answer you could give here?",
        "What first impression would instantly start a full conversation?"
    ],
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "comfortpick",
    "aliases": [
        "comfortpick"
    ],
    "title": "Comfort Pick",
    "description": "Get a random comfort pick prompt.",
    "usage": [
        "comfortpick"
    ],
    "prompts": [
        "What is one comfort pick you would share with this server right now?",
        "What is your most honest comfort pick when nobody is judging?",
        "What is a chaotic comfort pick you would still defend?",
        "What is the funniest comfort pick answer you could give here?",
        "What comfort pick would instantly start a full conversation?"
    ],
    "cooldown": 3
});

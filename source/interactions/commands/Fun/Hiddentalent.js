const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "hiddentalent",
    "aliases": [
        "hiddentalent"
    ],
    "title": "Hidden Talent",
    "description": "Get a random hidden talent prompt.",
    "usage": [
        "hiddentalent"
    ],
    "prompts": [
        "What is one hidden talent you would share with this server right now?",
        "What is your most honest hidden talent when nobody is judging?",
        "What is a chaotic hidden talent you would still defend?",
        "What is the funniest hidden talent answer you could give here?",
        "What hidden talent would instantly start a full conversation?"
    ],
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "realitycheck",
    "aliases": [
        "realitycheck"
    ],
    "title": "Reality Check",
    "description": "Get a random reality check prompt.",
    "usage": [
        "realitycheck"
    ],
    "prompts": [
        "What is one reality check you would share with this server right now?",
        "What is your most honest reality check when nobody is judging?",
        "What is a chaotic reality check you would still defend?",
        "What is the funniest reality check answer you could give here?",
        "What reality check would instantly start a full conversation?"
    ],
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "regretcheck",
    "aliases": [
        "regretcheck"
    ],
    "title": "Regret Check",
    "description": "Get a random regret prompt.",
    "usage": [
        "regretcheck"
    ],
    "prompts": [
        "What is one regret you would share with this server right now?",
        "What is your most honest regret when nobody is judging?",
        "What is a chaotic regret you would still defend?",
        "What is the funniest regret answer you could give here?",
        "What regret would instantly start a full conversation?"
    ],
    "cooldown": 3
});

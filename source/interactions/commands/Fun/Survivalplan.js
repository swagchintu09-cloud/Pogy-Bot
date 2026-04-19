const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "survivalplan",
    "aliases": [
        "survivalplan"
    ],
    "title": "Survival Plan",
    "description": "Get a random survival plan prompt.",
    "usage": [
        "survivalplan"
    ],
    "prompts": [
        "What is one survival plan you would share with this server right now?",
        "What is your most honest survival plan when nobody is judging?",
        "What is a chaotic survival plan you would still defend?",
        "What is the funniest survival plan answer you could give here?",
        "What survival plan would instantly start a full conversation?"
    ],
    "cooldown": 3
});

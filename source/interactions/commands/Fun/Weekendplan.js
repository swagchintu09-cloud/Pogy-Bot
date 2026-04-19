const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "weekendplan",
    "aliases": [
        "weekendplan"
    ],
    "title": "Weekend Plan",
    "description": "Get a random weekend plan prompt.",
    "usage": [
        "weekendplan"
    ],
    "prompts": [
        "What is one weekend plan you would share with this server right now?",
        "What is your most honest weekend plan when nobody is judging?",
        "What is a chaotic weekend plan you would still defend?",
        "What is the funniest weekend plan answer you could give here?",
        "What weekend plan would instantly start a full conversation?"
    ],
    "cooldown": 3
});

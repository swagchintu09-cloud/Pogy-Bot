const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "apocalypseplan",
    "aliases": [
        "apocalypseplan"
    ],
    "title": "Apocalypse Plan",
    "description": "Get a random apocalypse plan prompt.",
    "usage": [
        "apocalypseplan"
    ],
    "prompts": [
        "What is one apocalypse plan you would share with this server right now?",
        "What is your most honest apocalypse plan when nobody is judging?",
        "What is a chaotic apocalypse plan you would still defend?",
        "What is the funniest apocalypse plan answer you could give here?",
        "What apocalypse plan would instantly start a full conversation?"
    ],
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "worsthabit",
    "aliases": [
        "worsthabit"
    ],
    "title": "Worst Habit",
    "description": "Get a random bad habit prompt.",
    "usage": [
        "worsthabit"
    ],
    "prompts": [
        "What is one bad habit you would share with this server right now?",
        "What is your most honest bad habit when nobody is judging?",
        "What is a chaotic bad habit you would still defend?",
        "What is the funniest bad habit answer you could give here?",
        "What bad habit would instantly start a full conversation?"
    ],
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "morningroutine",
    "aliases": [
        "morningroutine"
    ],
    "title": "Morning Routine",
    "description": "Get a random morning routine prompt.",
    "usage": [
        "morningroutine"
    ],
    "prompts": [
        "What is one morning routine you would share with this server right now?",
        "What is your most honest morning routine when nobody is judging?",
        "What is a chaotic morning routine you would still defend?",
        "What is the funniest morning routine answer you could give here?",
        "What morning routine would instantly start a full conversation?"
    ],
    "cooldown": 3
});

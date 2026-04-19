const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "bestiecheck",
    "aliases": [
        "bestiecheck"
    ],
    "title": "Bestie Check",
    "description": "Get a random best friend opinion prompt.",
    "usage": [
        "bestiecheck"
    ],
    "prompts": [
        "What is one best friend opinion you would share with this server right now?",
        "What is your most honest best friend opinion when nobody is judging?",
        "What is a chaotic best friend opinion you would still defend?",
        "What is the funniest best friend opinion answer you could give here?",
        "What best friend opinion would instantly start a full conversation?"
    ],
    "cooldown": 3
});

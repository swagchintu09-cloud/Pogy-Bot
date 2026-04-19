const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "tinyvictory",
    "aliases": [
        "tinyvictory"
    ],
    "title": "Tiny Victory",
    "description": "Get a random tiny victory prompt.",
    "usage": [
        "tinyvictory"
    ],
    "prompts": [
        "What is one tiny victory you would share with this server right now?",
        "What is your most honest tiny victory when nobody is judging?",
        "What is a chaotic tiny victory you would still defend?",
        "What is the funniest tiny victory answer you could give here?",
        "What tiny victory would instantly start a full conversation?"
    ],
    "cooldown": 3
});

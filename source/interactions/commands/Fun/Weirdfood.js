const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "weirdfood",
    "aliases": [
        "weirdfood"
    ],
    "title": "Weird Food",
    "description": "Get a random weird food opinion prompt.",
    "usage": [
        "weirdfood"
    ],
    "prompts": [
        "What is one weird food opinion you would share with this server right now?",
        "What is your most honest weird food opinion when nobody is judging?",
        "What is a chaotic weird food opinion you would still defend?",
        "What is the funniest weird food opinion answer you could give here?",
        "What weird food opinion would instantly start a full conversation?"
    ],
    "cooldown": 3
});

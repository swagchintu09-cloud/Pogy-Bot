const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "nightmarefuel",
    "aliases": [
        "nightmarefuel"
    ],
    "title": "Nightmare Fuel",
    "description": "Get a random nightmare fuel prompt.",
    "usage": [
        "nightmarefuel"
    ],
    "prompts": [
        "What is one nightmare fuel you would share with this server right now?",
        "What is your most honest nightmare fuel when nobody is judging?",
        "What is a chaotic nightmare fuel you would still defend?",
        "What is the funniest nightmare fuel answer you could give here?",
        "What nightmare fuel would instantly start a full conversation?"
    ],
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "socialrisk",
    "aliases": [
        "socialrisk"
    ],
    "title": "Social Risk",
    "description": "Get a random social risk prompt.",
    "usage": [
        "socialrisk"
    ],
    "prompts": [
        "What is one social risk you would share with this server right now?",
        "What is your most honest social risk when nobody is judging?",
        "What is a chaotic social risk you would still defend?",
        "What is the funniest social risk answer you could give here?",
        "What social risk would instantly start a full conversation?"
    ],
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "flex",
    "aliases": [
        "flex"
    ],
    "title": "Flex",
    "description": "Get a random flex prompt.",
    "usage": [
        "flex"
    ],
    "prompts": [
        "What is one flex you would share with this server right now?",
        "What is your most honest flex when nobody is judging?",
        "What is a chaotic flex you would still defend?",
        "What is the funniest flex answer you could give here?",
        "What flex would instantly start a full conversation?"
    ],
    "cooldown": 3
});

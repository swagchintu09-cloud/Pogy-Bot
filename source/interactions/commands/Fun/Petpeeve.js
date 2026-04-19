const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "petpeeve",
    "aliases": [
        "petpeeve"
    ],
    "title": "Pet Peeve",
    "description": "Get a random pet peeve prompt.",
    "usage": [
        "petpeeve"
    ],
    "prompts": [
        "What is one pet peeve you would share with this server right now?",
        "What is your most honest pet peeve when nobody is judging?",
        "What is a chaotic pet peeve you would still defend?",
        "What is the funniest pet peeve answer you could give here?",
        "What pet peeve would instantly start a full conversation?"
    ],
    "cooldown": 3
});

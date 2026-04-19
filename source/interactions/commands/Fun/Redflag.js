const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "redflag",
    "aliases": [
        "redflag"
    ],
    "title": "Red Flag",
    "description": "Get a random red flag prompt.",
    "usage": [
        "redflag"
    ],
    "prompts": [
        "What is one red flag you would share with this server right now?",
        "What is your most honest red flag when nobody is judging?",
        "What is a chaotic red flag you would still defend?",
        "What is the funniest red flag answer you could give here?",
        "What red flag would instantly start a full conversation?"
    ],
    "cooldown": 3
});

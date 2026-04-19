const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "roommatego",
    "aliases": [
        "roommatego"
    ],
    "title": "Roommate Go",
    "description": "Get a random roommate rule prompt.",
    "usage": [
        "roommatego"
    ],
    "prompts": [
        "What is one roommate rule you would share with this server right now?",
        "What is your most honest roommate rule when nobody is judging?",
        "What is a chaotic roommate rule you would still defend?",
        "What is the funniest roommate rule answer you could give here?",
        "What roommate rule would instantly start a full conversation?"
    ],
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "snackquestion",
    "aliases": [
        "snackquestion"
    ],
    "title": "Snack Question",
    "description": "Get a random snack ranking prompt.",
    "usage": [
        "snackquestion"
    ],
    "prompts": [
        "What is one snack ranking you would share with this server right now?",
        "What is your most honest snack ranking when nobody is judging?",
        "What is a chaotic snack ranking you would still defend?",
        "What is the funniest snack ranking answer you could give here?",
        "What snack ranking would instantly start a full conversation?"
    ],
    "cooldown": 3
});

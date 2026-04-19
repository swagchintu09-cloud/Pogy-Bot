const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "secretwish",
    "aliases": [
        "secretwish"
    ],
    "title": "Secret Wish",
    "description": "Get a random secret wish prompt.",
    "usage": [
        "secretwish"
    ],
    "prompts": [
        "What is one secret wish you would share with this server right now?",
        "What is your most honest secret wish when nobody is judging?",
        "What is a chaotic secret wish you would still defend?",
        "What is the funniest secret wish answer you could give here?",
        "What secret wish would instantly start a full conversation?"
    ],
    "cooldown": 3
});

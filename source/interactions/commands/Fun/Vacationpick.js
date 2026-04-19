const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "vacationpick",
    "aliases": [
        "vacationpick"
    ],
    "title": "Vacation Pick",
    "description": "Get a random vacation destination prompt.",
    "usage": [
        "vacationpick"
    ],
    "prompts": [
        "What is one vacation destination you would share with this server right now?",
        "What is your most honest vacation destination when nobody is judging?",
        "What is a chaotic vacation destination you would still defend?",
        "What is the funniest vacation destination answer you could give here?",
        "What vacation destination would instantly start a full conversation?"
    ],
    "cooldown": 3
});

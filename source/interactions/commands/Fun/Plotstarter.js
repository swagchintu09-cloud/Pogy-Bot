const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "plotstarter",
    "aliases": [
        "plotstarter"
    ],
    "title": "Plot Starter",
    "description": "Get a random story starter prompt.",
    "usage": [
        "plotstarter"
    ],
    "prompts": [
        "What is one story starter you would share with this server right now?",
        "What is your most honest story starter when nobody is judging?",
        "What is a chaotic story starter you would still defend?",
        "What is the funniest story starter answer you could give here?",
        "What story starter would instantly start a full conversation?"
    ],
    "cooldown": 3
});

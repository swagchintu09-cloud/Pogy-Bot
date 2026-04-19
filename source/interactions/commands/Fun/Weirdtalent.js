const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "weirdtalent",
    "aliases": [
        "weirdtalent"
    ],
    "title": "Weird Talent",
    "description": "Get a random weird talent prompt.",
    "usage": [
        "weirdtalent"
    ],
    "prompts": [
        "What is one weird talent you would share with this server right now?",
        "What is your most honest weird talent when nobody is judging?",
        "What is a chaotic weird talent you would still defend?",
        "What is the funniest weird talent answer you could give here?",
        "What weird talent would instantly start a full conversation?"
    ],
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "unpopularopinion",
    "aliases": [
        "unpopularopinion"
    ],
    "title": "Unpopular Opinion",
    "description": "Get a random unpopular opinion prompt.",
    "usage": [
        "unpopularopinion"
    ],
    "prompts": [
        "What is one unpopular opinion you would share with this server right now?",
        "What is your most honest unpopular opinion when nobody is judging?",
        "What is a chaotic unpopular opinion you would still defend?",
        "What is the funniest unpopular opinion answer you could give here?",
        "What unpopular opinion would instantly start a full conversation?"
    ],
    "cooldown": 3
});

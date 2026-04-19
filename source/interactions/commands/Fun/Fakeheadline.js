const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "fakeheadline",
    "aliases": [
        "fakeheadline"
    ],
    "title": "Fake Headline",
    "description": "Get a random fake headline prompt.",
    "usage": [
        "fakeheadline"
    ],
    "prompts": [
        "What is one fake headline you would share with this server right now?",
        "What is your most honest fake headline when nobody is judging?",
        "What is a chaotic fake headline you would still defend?",
        "What is the funniest fake headline answer you could give here?",
        "What fake headline would instantly start a full conversation?"
    ],
    "cooldown": 3
});

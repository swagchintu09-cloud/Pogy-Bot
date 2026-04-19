const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "wildcardprompt",
    "aliases": [
        "wildcardprompt"
    ],
    "title": "Wildcard Prompt",
    "description": "Get a random wildcard answer prompt.",
    "usage": [
        "wildcardprompt"
    ],
    "prompts": [
        "What is one wildcard answer you would share with this server right now?",
        "What is your most honest wildcard answer when nobody is judging?",
        "What is a chaotic wildcard answer you would still defend?",
        "What is the funniest wildcard answer answer you could give here?",
        "What wildcard answer would instantly start a full conversation?"
    ],
    "cooldown": 3
});

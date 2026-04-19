const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "bucketlist",
    "aliases": [
        "bucketlist"
    ],
    "title": "Bucket List",
    "description": "Get a random bucket-list item prompt.",
    "usage": [
        "bucketlist"
    ],
    "prompts": [
        "What is one bucket-list item you would share with this server right now?",
        "What is your most honest bucket-list item when nobody is judging?",
        "What is a chaotic bucket-list item you would still defend?",
        "What is the funniest bucket-list item answer you could give here?",
        "What bucket-list item would instantly start a full conversation?"
    ],
    "cooldown": 3
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "playlistmood",
    "aliases": [
        "playlistmood"
    ],
    "title": "Playlist Mood",
    "description": "Get a random playlist mood prompt.",
    "usage": [
        "playlistmood"
    ],
    "prompts": [
        "What is one playlist mood you would share with this server right now?",
        "What is your most honest playlist mood when nobody is judging?",
        "What is a chaotic playlist mood you would still defend?",
        "What is the funniest playlist mood answer you could give here?",
        "What playlist mood would instantly start a full conversation?"
    ],
    "cooldown": 3
});

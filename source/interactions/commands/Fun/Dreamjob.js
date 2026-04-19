const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "dreamjob",
    "aliases": [
        "dreamjob"
    ],
    "title": "Dream Job",
    "description": "Get a random dream job prompt.",
    "usage": [
        "dreamjob"
    ],
    "prompts": [
        "What is one dream job you would share with this server right now?",
        "What is your most honest dream job when nobody is judging?",
        "What is a chaotic dream job you would still defend?",
        "What is the funniest dream job answer you could give here?",
        "What dream job would instantly start a full conversation?"
    ],
    "cooldown": 3
});

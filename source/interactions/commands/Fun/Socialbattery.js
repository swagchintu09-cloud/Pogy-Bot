const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "prompt",
    "name": "socialbattery",
    "aliases": [
        "socialbattery"
    ],
    "title": "Social Battery",
    "description": "Get a random social battery story prompt.",
    "usage": [
        "socialbattery"
    ],
    "prompts": [
        "What is one social battery story you would share with this server right now?",
        "What is your most honest social battery story when nobody is judging?",
        "What is a chaotic social battery story you would still defend?",
        "What is the funniest social battery story answer you could give here?",
        "What social battery story would instantly start a full conversation?"
    ],
    "cooldown": 3
});

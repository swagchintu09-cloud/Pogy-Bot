const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "randomgame",
    "aliases": [
        "randomgame"
    ],
    "title": "Random Game",
    "description": "Generate a random random game result.",
    "usage": [
        "randomgame"
    ],
    "intro": "Game night pick:",
    "items": [
        "Hide and seek",
        "Trivia",
        "Jackbox",
        "Uno",
        "Mafia",
        "GeoGuessr"
    ],
    "cooldown": 2
});

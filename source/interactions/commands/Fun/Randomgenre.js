const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "randomgenre",
    "aliases": [
        "randomgenre"
    ],
    "title": "Random Genre",
    "description": "Generate a random random genre result.",
    "usage": [
        "randomgenre"
    ],
    "intro": "Genre pulled:",
    "items": [
        "Fantasy",
        "Thriller",
        "Romance",
        "Sci-fi",
        "Mystery",
        "Comedy"
    ],
    "cooldown": 2
});

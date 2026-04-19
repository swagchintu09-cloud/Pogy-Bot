const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "randomizer",
    "name": "randomteamrole",
    "aliases": [
        "randomteamrole"
    ],
    "title": "Random Team Role",
    "description": "Generate a random random team role result.",
    "usage": [
        "randomteamrole"
    ],
    "intro": "Your squad role is:",
    "items": [
        "Strategist",
        "Wildcard",
        "Scout",
        "Medic",
        "Hype unit",
        "Suspicious specialist"
    ],
    "cooldown": 2
});

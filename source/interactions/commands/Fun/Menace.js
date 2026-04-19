const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "menace",
    "aliases": [
        "menace"
    ],
    "title": "Menace",
    "description": "Menace a user.",
    "usage": [
        "menace <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** becomes a direct menace to **{target}**."
    ],
    "cooldown": 2
});

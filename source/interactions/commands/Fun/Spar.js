const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "spar",
    "aliases": [
        "spar"
    ],
    "title": "Spar",
    "description": "Spar a user.",
    "usage": [
        "spar <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** starts a friendly spar with **{target}**."
    ],
    "cooldown": 2
});

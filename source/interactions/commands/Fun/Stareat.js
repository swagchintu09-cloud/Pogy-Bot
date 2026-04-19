const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "stareat",
    "aliases": [
        "stareat"
    ],
    "title": "Stare At",
    "description": "Stare At a user.",
    "usage": [
        "stareat <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** stares at **{target}** until it gets weird."
    ],
    "cooldown": 2
});

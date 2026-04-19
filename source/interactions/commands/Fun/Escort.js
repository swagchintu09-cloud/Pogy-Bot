const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "escort",
    "aliases": [
        "escort"
    ],
    "title": "Escort",
    "description": "Escort a user.",
    "usage": [
        "escort <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** escorts **{target}** to the front of the chaos line."
    ],
    "cooldown": 2
});

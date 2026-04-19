const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "tease",
    "aliases": [
        "tease"
    ],
    "title": "Tease",
    "description": "Tease a user.",
    "usage": [
        "tease <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** teases **{target}** just enough to be annoying."
    ],
    "cooldown": 2
});

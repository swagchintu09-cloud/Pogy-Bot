const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "confuse",
    "aliases": [
        "confuse"
    ],
    "title": "Confuse",
    "description": "Confuse a user.",
    "usage": [
        "confuse <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** confuses **{target}** with expert precision."
    ],
    "cooldown": 2
});

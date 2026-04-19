const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "haunt",
    "aliases": [
        "haunt"
    ],
    "title": "Haunt",
    "description": "Haunt a user.",
    "usage": [
        "haunt <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** decides to haunt **{target}** for the next five minutes."
    ],
    "cooldown": 2
});

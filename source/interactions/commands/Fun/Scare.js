const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "scare",
    "aliases": [
        "scare"
    ],
    "title": "Scare",
    "description": "Scare a user.",
    "usage": [
        "scare <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** scares **{target}** with perfect timing."
    ],
    "cooldown": 2
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "override",
    "aliases": [
        "override"
    ],
    "title": "Override",
    "description": "Override a user.",
    "usage": [
        "override <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** tries to override **{target}** with confidence alone."
    ],
    "cooldown": 2
});

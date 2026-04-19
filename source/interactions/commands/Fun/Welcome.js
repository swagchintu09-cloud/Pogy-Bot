const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "welcome",
    "aliases": [
        "welcome"
    ],
    "title": "Welcome",
    "description": "Welcome a user.",
    "usage": [
        "welcome <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** welcomes **{target}** like the event finally started."
    ],
    "cooldown": 2
});

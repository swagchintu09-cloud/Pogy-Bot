const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "zoompast",
    "aliases": [
        "zoompast"
    ],
    "title": "Zoom Past",
    "description": "Zoom Past a user.",
    "usage": [
        "zoompast <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** zooms past **{target}** in a blur."
    ],
    "cooldown": 2
});

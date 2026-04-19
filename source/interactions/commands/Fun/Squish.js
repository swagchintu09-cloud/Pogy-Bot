const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "squish",
    "aliases": [
        "squish"
    ],
    "title": "Squish",
    "description": "Squish a user.",
    "usage": [
        "squish <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** squishes **{target}** with alarming affection."
    ],
    "cooldown": 2
});

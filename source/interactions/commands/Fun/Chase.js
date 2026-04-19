const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "chase",
    "aliases": [
        "chase"
    ],
    "title": "Chase",
    "description": "Chase a user.",
    "usage": [
        "chase <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** starts chasing **{target}** around the room."
    ],
    "cooldown": 2
});

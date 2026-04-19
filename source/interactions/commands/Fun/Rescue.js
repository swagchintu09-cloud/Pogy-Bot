const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "rescue",
    "aliases": [
        "rescue"
    ],
    "title": "Rescue",
    "description": "Rescue a user.",
    "usage": [
        "rescue <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** rescues **{target}** from the terrible idea."
    ],
    "cooldown": 2
});

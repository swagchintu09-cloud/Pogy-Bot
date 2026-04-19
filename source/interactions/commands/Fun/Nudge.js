const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "nudge",
    "aliases": [
        "nudge"
    ],
    "title": "Nudge",
    "description": "Nudge a user.",
    "usage": [
        "nudge <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** nudges **{target}** like they know something."
    ],
    "cooldown": 2
});

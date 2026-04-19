const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "screamat",
    "aliases": [
        "screamat"
    ],
    "title": "Scream At",
    "description": "Scream At a user.",
    "usage": [
        "screamat <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** screams at **{target}** in lowercase."
    ],
    "cooldown": 2
});

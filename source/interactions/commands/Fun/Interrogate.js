const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "interrogate",
    "aliases": [
        "interrogate"
    ],
    "title": "Interrogate",
    "description": "Interrogate a user.",
    "usage": [
        "interrogate <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** interrogates **{target}** with fake authority."
    ],
    "cooldown": 2
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "thank",
    "aliases": [
        "thank"
    ],
    "title": "Thank",
    "description": "Thank a user.",
    "usage": [
        "thank <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** thanks **{target}** like a legend."
    ],
    "cooldown": 2
});

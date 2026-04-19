const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "prank",
    "aliases": [
        "prank"
    ],
    "title": "Prank",
    "description": "Prank a user.",
    "usage": [
        "prank <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** pulls a harmless prank on **{target}**."
    ],
    "cooldown": 2
});

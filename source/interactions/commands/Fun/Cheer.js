const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "cheer",
    "aliases": [
        "cheer"
    ],
    "title": "Cheer",
    "description": "Cheer a user.",
    "usage": [
        "cheer <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** cheers wildly for **{target}**."
    ],
    "cooldown": 2
});

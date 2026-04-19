const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "spotlight",
    "aliases": [
        "spotlight"
    ],
    "title": "Spotlight",
    "description": "Spotlight a user.",
    "usage": [
        "spotlight <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** throws the spotlight onto **{target}**."
    ],
    "cooldown": 2
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "throwshade",
    "aliases": [
        "throwshade"
    ],
    "title": "Throw Shade",
    "description": "Throw Shade a user.",
    "usage": [
        "throwshade <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** throws elite shade at **{target}**."
    ],
    "cooldown": 2
});

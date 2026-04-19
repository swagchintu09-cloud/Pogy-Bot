const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "bump",
    "aliases": [
        "bump"
    ],
    "title": "Bump",
    "description": "Bump a user.",
    "usage": [
        "bump <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** shoulder-bumps **{target}** and keeps moving."
    ],
    "cooldown": 2
});

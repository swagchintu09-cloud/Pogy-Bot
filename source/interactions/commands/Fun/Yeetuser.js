const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "yeetuser",
    "aliases": [
        "yeetuser"
    ],
    "title": "Yeet",
    "description": "Yeet a user.",
    "usage": [
        "yeetuser <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** yeets **{target}** directly into the side quest."
    ],
    "cooldown": 2
});

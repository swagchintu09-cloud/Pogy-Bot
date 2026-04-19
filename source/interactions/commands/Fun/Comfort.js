const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "comfort",
    "aliases": [
        "comfort"
    ],
    "title": "Comfort",
    "description": "Comfort a user.",
    "usage": [
        "comfort <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** comforts **{target}** and tells them it will be okay."
    ],
    "cooldown": 2
});

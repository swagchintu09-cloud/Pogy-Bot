const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "drag",
    "aliases": [
        "drag"
    ],
    "title": "Drag",
    "description": "Drag a user.",
    "usage": [
        "drag <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** drags **{target}** straight into the mess."
    ],
    "cooldown": 2
});

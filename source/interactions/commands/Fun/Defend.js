const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "defend",
    "aliases": [
        "defend"
    ],
    "title": "Defend",
    "description": "Defend a user.",
    "usage": [
        "defend <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** instantly defends **{target}** in the argument."
    ],
    "cooldown": 2
});

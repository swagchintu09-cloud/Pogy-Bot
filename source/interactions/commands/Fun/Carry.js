const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "carry",
    "aliases": [
        "carry"
    ],
    "title": "Carry",
    "description": "Carry a user.",
    "usage": [
        "carry <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** carries **{target}** through the chaos."
    ],
    "cooldown": 2
});

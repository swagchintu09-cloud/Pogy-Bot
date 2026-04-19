const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "judge",
    "aliases": [
        "judge"
    ],
    "title": "Judge",
    "description": "Judge a user.",
    "usage": [
        "judge <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** silently judges **{target}** with intense focus."
    ],
    "cooldown": 2
});

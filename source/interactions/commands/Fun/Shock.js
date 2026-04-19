const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "shock",
    "aliases": [
        "shock"
    ],
    "title": "Shock",
    "description": "Shock a user.",
    "usage": [
        "shock <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** shocks **{target}** with unexpected news."
    ],
    "cooldown": 2
});

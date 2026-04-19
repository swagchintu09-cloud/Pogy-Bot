const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "salute",
    "aliases": [
        "salute"
    ],
    "title": "Salute",
    "description": "Salute a user.",
    "usage": [
        "salute <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** salutes **{target}** with maximum respect."
    ],
    "cooldown": 2
});

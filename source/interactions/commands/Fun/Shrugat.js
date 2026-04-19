const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "shrugat",
    "aliases": [
        "shrugat"
    ],
    "title": "Shrug At",
    "description": "Shrug At a user.",
    "usage": [
        "shrugat <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** shrugs at **{target}** and refuses to elaborate."
    ],
    "cooldown": 2
});

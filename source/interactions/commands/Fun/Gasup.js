const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "gasup",
    "aliases": [
        "gasup"
    ],
    "title": "Gas Up",
    "description": "Gas Up a user.",
    "usage": [
        "gasup <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** gases up **{target}** like they are about to drop a classic."
    ],
    "cooldown": 2
});

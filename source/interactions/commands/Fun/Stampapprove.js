const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "stampapprove",
    "aliases": [
        "stampapprove"
    ],
    "title": "Stamp Approve",
    "description": "Stamp Approve a user.",
    "usage": [
        "stampapprove <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** stamps **{target}** as officially approved."
    ],
    "cooldown": 2
});

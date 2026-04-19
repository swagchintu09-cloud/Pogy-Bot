const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "draft",
    "aliases": [
        "draft"
    ],
    "title": "Draft",
    "description": "Draft a user.",
    "usage": [
        "draft <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** drafts **{target}** onto the weird mission team."
    ],
    "cooldown": 2
});

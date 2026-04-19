const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "shadow",
    "aliases": [
        "shadow"
    ],
    "title": "Shadow",
    "description": "Shadow a user.",
    "usage": [
        "shadow <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** starts shadowing **{target}** like a side quest."
    ],
    "cooldown": 2
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "scold",
    "aliases": [
        "scold"
    ],
    "title": "Scold",
    "description": "Scold a user.",
    "usage": [
        "scold <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** scolds **{target}** like unpaid staff."
    ],
    "cooldown": 2
});

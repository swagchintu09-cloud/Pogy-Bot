const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "roast",
    "aliases": [
        "roast"
    ],
    "title": "Roast",
    "description": "Roast a user.",
    "usage": [
        "roast <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** roasts **{target}** until the smoke alarm notices."
    ],
    "cooldown": 2
});

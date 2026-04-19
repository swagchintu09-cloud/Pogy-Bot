const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "pettycheck",
    "aliases": [
        "pettycheck"
    ],
    "title": "Petty Check",
    "description": "Petty Check a user.",
    "usage": [
        "pettycheck <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** performs a petty check on **{target}**."
    ],
    "cooldown": 2
});

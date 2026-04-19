const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "headpat",
    "aliases": [
        "headpat"
    ],
    "title": "Headpat",
    "description": "Headpat a user.",
    "usage": [
        "headpat <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** gives **{target}** a respectful headpat."
    ],
    "cooldown": 2
});

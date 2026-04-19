const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "laughat",
    "aliases": [
        "laughat"
    ],
    "title": "Laugh At",
    "description": "Laugh At a user.",
    "usage": [
        "laughat <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** laughs at **{target}** and makes it worse."
    ],
    "cooldown": 2
});

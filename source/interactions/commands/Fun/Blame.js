const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "blame",
    "aliases": [
        "blame"
    ],
    "title": "Blame",
    "description": "Blame a user.",
    "usage": [
        "blame <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** blames **{target}** for the server-wide confusion."
    ],
    "cooldown": 2
});

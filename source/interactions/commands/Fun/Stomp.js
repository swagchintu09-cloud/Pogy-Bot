const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "stomp",
    "aliases": [
        "stomp"
    ],
    "title": "Stomp",
    "description": "Stomp a user.",
    "usage": [
        "stomp <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** stomps toward **{target}** like a boss intro."
    ],
    "cooldown": 2
});

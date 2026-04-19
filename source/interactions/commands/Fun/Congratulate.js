const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "congratulate",
    "aliases": [
        "congratulate"
    ],
    "title": "Congratulate",
    "description": "Congratulate a user.",
    "usage": [
        "congratulate <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** congratulates **{target}** with suspicious enthusiasm."
    ],
    "cooldown": 2
});

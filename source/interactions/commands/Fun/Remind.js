const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "remind",
    "aliases": [
        "remind"
    ],
    "title": "Remind",
    "description": "Remind a user.",
    "usage": [
        "remind <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** reminds **{target}** to stay hydrated and slightly dangerous."
    ],
    "cooldown": 2
});

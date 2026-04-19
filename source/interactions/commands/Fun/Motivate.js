const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "motivate",
    "aliases": [
        "motivate"
    ],
    "title": "Motivate",
    "description": "Motivate a user.",
    "usage": [
        "motivate <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** motivates **{target}** with pure delusion and confidence."
    ],
    "cooldown": 2
});

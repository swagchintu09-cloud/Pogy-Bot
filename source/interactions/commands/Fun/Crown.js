const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "crown",
    "aliases": [
        "crown"
    ],
    "title": "Crown",
    "description": "Crown a user.",
    "usage": [
        "crown <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** crowns **{target}** the winner of absolutely nothing."
    ],
    "cooldown": 2
});

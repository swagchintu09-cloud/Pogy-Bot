const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "stealfrom",
    "aliases": [
        "stealfrom"
    ],
    "title": "Steal From",
    "description": "Steal From a user.",
    "usage": [
        "stealfrom <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** steals the spotlight from **{target}**."
    ],
    "cooldown": 2
});

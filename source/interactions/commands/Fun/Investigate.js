const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "investigate",
    "aliases": [
        "investigate"
    ],
    "title": "Investigate",
    "description": "Investigate a user.",
    "usage": [
        "investigate <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** investigates **{target}** like a suspicious case file."
    ],
    "cooldown": 2
});

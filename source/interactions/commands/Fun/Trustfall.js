const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "trustfall",
    "aliases": [
        "trustfall"
    ],
    "title": "Trust Fall",
    "description": "Trust Fall a user.",
    "usage": [
        "trustfall <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** trust-falls toward **{target}** and hopes for the best."
    ],
    "cooldown": 2
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "wagfinger",
    "aliases": [
        "wagfinger"
    ],
    "title": "Wag Finger",
    "description": "Wag Finger a user.",
    "usage": [
        "wagfinger <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** wags a finger at **{target}** like a disappointed aunt."
    ],
    "cooldown": 2
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "serenade",
    "aliases": [
        "serenade"
    ],
    "title": "Serenade",
    "description": "Serenade a user.",
    "usage": [
        "serenade <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** serenades **{target}** with questionable vocals."
    ],
    "cooldown": 2
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "shove",
    "aliases": [
        "shove"
    ],
    "title": "Shove",
    "description": "Shove a user.",
    "usage": [
        "shove <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** shoves **{target}** toward the objective."
    ],
    "cooldown": 2
});

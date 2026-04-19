const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "sneakup",
    "aliases": [
        "sneakup"
    ],
    "title": "Sneak Up",
    "description": "Sneak Up a user.",
    "usage": [
        "sneakup <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** sneaks up behind **{target}** with chaotic intent."
    ],
    "cooldown": 2
});

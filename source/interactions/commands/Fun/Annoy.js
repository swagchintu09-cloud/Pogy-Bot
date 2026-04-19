const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "annoy",
    "aliases": [
        "annoy"
    ],
    "title": "Annoy",
    "description": "Annoy a user.",
    "usage": [
        "annoy <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** keeps annoying **{target}** for the bit."
    ],
    "cooldown": 2
});

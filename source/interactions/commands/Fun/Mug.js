const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "mug",
    "aliases": [
        "mug"
    ],
    "title": "Mug",
    "description": "Mug a user.",
    "usage": [
        "mug <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** mugs **{target}** for imaginary coins."
    ],
    "cooldown": 2
});

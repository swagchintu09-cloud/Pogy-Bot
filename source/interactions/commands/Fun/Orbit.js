const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "orbit",
    "aliases": [
        "orbit"
    ],
    "title": "Orbit",
    "description": "Orbit a user.",
    "usage": [
        "orbit <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** keeps orbiting around **{target}** suspiciously."
    ],
    "cooldown": 2
});

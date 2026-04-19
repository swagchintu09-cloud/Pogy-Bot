const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "hype",
    "aliases": [
        "hype"
    ],
    "title": "Hype",
    "description": "Hype a user.",
    "usage": [
        "hype <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** hypes **{target}** up like a coach before finals."
    ],
    "cooldown": 2
});

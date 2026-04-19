const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "applaud",
    "aliases": [
        "applaud"
    ],
    "title": "Applaud",
    "description": "Applaud a user.",
    "usage": [
        "applaud <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** gives **{target}** a dramatic standing ovation."
    ],
    "cooldown": 2
});

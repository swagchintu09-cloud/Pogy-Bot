const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "mimic",
    "aliases": [
        "mimic"
    ],
    "title": "Mimic",
    "description": "Mimic a user.",
    "usage": [
        "mimic <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** mimics **{target}** with embarrassing accuracy."
    ],
    "cooldown": 2
});

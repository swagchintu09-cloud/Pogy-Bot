const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "toast",
    "aliases": [
        "toast"
    ],
    "title": "Toast",
    "description": "Toast a user.",
    "usage": [
        "toast <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** raises a toast to **{target}**."
    ],
    "cooldown": 2
});

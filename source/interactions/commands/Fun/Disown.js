const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "disown",
    "aliases": [
        "disown"
    ],
    "title": "Disown",
    "description": "Disown a user.",
    "usage": [
        "disown <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** dramatically disowns **{target}** for that take."
    ],
    "cooldown": 2
});

const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "fistbump",
    "aliases": [
        "fistbump"
    ],
    "title": "Fistbump",
    "description": "Fistbump a user.",
    "usage": [
        "fistbump <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** fist-bumps **{target}** like real ones do."
    ],
    "cooldown": 2
});

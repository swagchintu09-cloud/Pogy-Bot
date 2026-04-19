const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "sponsor",
    "aliases": [
        "sponsor"
    ],
    "title": "Sponsor",
    "description": "Sponsor a user.",
    "usage": [
        "sponsor <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** officially sponsors **{target}** for the next bad decision."
    ],
    "cooldown": 2
});

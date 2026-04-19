const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "challengeuser",
    "aliases": [
        "challengeuser"
    ],
    "title": "Challenge",
    "description": "Challenge a user.",
    "usage": [
        "challengeuser <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** challenges **{target}** to settle it properly."
    ],
    "cooldown": 2
});

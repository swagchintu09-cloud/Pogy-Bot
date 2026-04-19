const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "summon",
    "aliases": [
        "summon"
    ],
    "title": "Summon",
    "description": "Summon a user.",
    "usage": [
        "summon <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** summons **{target}** into the conversation."
    ],
    "cooldown": 2
});

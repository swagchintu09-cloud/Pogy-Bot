const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "admire",
    "aliases": [
        "admire"
    ],
    "title": "Admire",
    "description": "Admire a user.",
    "usage": [
        "admire <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** admires **{target}** like they just solved the whole server."
    ],
    "cooldown": 2
});

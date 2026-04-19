const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "worship",
    "aliases": [
        "worship"
    ],
    "title": "Worship",
    "description": "Worship a user.",
    "usage": [
        "worship <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** worships **{target}** like they dropped the perfect take."
    ],
    "cooldown": 2
});

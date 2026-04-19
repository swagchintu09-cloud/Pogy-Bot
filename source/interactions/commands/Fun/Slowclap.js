const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "slowclap",
    "aliases": [
        "slowclap"
    ],
    "title": "Slow Clap",
    "description": "Slow Clap a user.",
    "usage": [
        "slowclap <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** slow-claps for **{target}** with theatrical patience."
    ],
    "cooldown": 2
});

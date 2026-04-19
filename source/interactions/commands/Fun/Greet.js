const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "greet",
    "aliases": [
        "greet"
    ],
    "title": "Greet",
    "description": "Greet a user.",
    "usage": [
        "greet <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** greets **{target}** like the main character just arrived."
    ],
    "cooldown": 2
});

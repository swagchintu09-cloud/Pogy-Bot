const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "sideeye",
    "aliases": [
        "sideeye"
    ],
    "title": "Side Eye",
    "description": "Side Eye a user.",
    "usage": [
        "sideeye <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** gives **{target}** the strongest side-eye available."
    ],
    "cooldown": 2
});

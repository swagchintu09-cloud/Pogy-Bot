const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "zap",
    "aliases": [
        "zap"
    ],
    "title": "Zap",
    "description": "Zap a user.",
    "usage": [
        "zap <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** zaps **{target}** with cartoon-level energy."
    ],
    "cooldown": 2
});

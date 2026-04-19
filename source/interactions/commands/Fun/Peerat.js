const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "peerat",
    "aliases": [
        "peerat"
    ],
    "title": "Peer At",
    "description": "Peer At a user.",
    "usage": [
        "peerat <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** peers at **{target}** like a detective in act two."
    ],
    "cooldown": 2
});

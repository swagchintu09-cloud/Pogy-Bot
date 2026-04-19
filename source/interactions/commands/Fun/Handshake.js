const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "handshake",
    "aliases": [
        "handshake"
    ],
    "title": "Handshake",
    "description": "Handshake a user.",
    "usage": [
        "handshake <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** offers **{target}** a formal handshake."
    ],
    "cooldown": 2
});

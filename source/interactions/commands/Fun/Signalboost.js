const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "signalboost",
    "aliases": [
        "signalboost"
    ],
    "title": "Signal Boost",
    "description": "Signal Boost a user.",
    "usage": [
        "signalboost <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** signal-boosts **{target}** to the whole room."
    ],
    "cooldown": 2
});

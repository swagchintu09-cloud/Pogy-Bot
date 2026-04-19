const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "agentrate",
    "aliases": [
        "agentrate"
    ],
    "title": "Agent Rate",
    "description": "Check the agent level.",
    "usage": [
        "agentrate <user>"
    ],
    "scale": "agent",
    "high": "That is elite agent energy.",
    "mid": "That is respectable agent territory.",
    "low": "That is barely any agent at all.",
    "cooldown": 3
});

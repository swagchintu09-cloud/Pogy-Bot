const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "rating",
    "name": "gremlinrate",
    "aliases": [
        "gremlinrate"
    ],
    "title": "Gremlin Rate",
    "description": "Check the gremlin level.",
    "usage": [
        "gremlinrate <user>"
    ],
    "scale": "gremlin",
    "high": "That is elite gremlin energy.",
    "mid": "That is respectable gremlin territory.",
    "low": "That is barely any gremlin at all.",
    "cooldown": 3
});

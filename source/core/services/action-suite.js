const EmbedWorkflow = require("../orchestration/workflows/embedFunction");
const WelcomeWorkflow = require("../orchestration/workflows/welcomeFunction");
const RoleWorkflow = require("../orchestration/workflows/roleFunction");
const SetupWorkflow = require("../orchestration/workflows/setupFunction");
const PresenceWorkflow = require("../orchestration/workflows/presenceFunction");

class ActionSuite {
  constructor(client) {
    this.client = client;
    this.embedFunction = new EmbedWorkflow(client);
    this.welcomeFunction = new WelcomeWorkflow(client);
    this.roleFunction = new RoleWorkflow(client);
    this.SetupFunction = new SetupWorkflow(client);
    this.PresenceFunction = new PresenceWorkflow(client);
  }
}

module.exports = ActionSuite;




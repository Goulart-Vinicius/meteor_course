import { Meteor } from "meteor/meteor";
import { Bins } from "/imports/api/bins";

Meteor.startup(async () => {
  // Criar nossa Publish
  Meteor.publish("bins", async function () {
    return await Bins.find({ ownerId: this.userId });
  });
});

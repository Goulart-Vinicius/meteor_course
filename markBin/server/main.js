import { Meteor } from "meteor/meteor";
import { Bins } from "/imports/api/bins";

Meteor.startup(async () => {
  // Criar nossa Publish
  Meteor.publish("bins", async function () {
    return await Bins.find({ ownerId: this.userId });
  });

  Meteor.publish("sharedBins", async function () {
    const user = await Meteor.users.findOneAsync(this.userId);

    const email = user.emails[0].address;

    return await Bins.find({ sharedWith: { $elemMatch: { $eq: email } } });
  });
});

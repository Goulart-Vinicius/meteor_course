import { Mongo } from "meteor/mongo";
import { content } from "/tailwind.config";
import { error } from "jquery";

export const Bins = new Mongo.Collection("Bins");

Meteor.methods({
  "bins.insert": async function () {
    return await Bins.insertAsync({
      created_at: new Date(),
      content: "",
      sharedWith: [],
      ownerId: this.userId,
      name:
        "Bin " + ((await Bins.find({ ownerId: this.userId }).countAsync()) + 1),
    });
  },
  "bins.remove": async function (bin) {
    return await Bins.removeAsync(bin);
  },
  "bins.update": async function (binId, content) {
    return await Bins.updateAsync(binId, { $set: { content: content } });
  },
  "bins.updateShared": async function (binId, email) {
    try {
      const emails = await Bins.findOneAsync(binId);
      if (!email) {
        throw new Error("Can't share bin with null email.");
      }
      if (email in emails) {
        throw new Error("Bin has already been shared with this email.");
      }
      await Bins.updateAsync(binId, { $push: { sharedWith: email } });
      return { error: "" };
    } catch (error) {
      return { error: error.message };
    }
  },
});

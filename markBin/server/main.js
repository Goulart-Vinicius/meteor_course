import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';


Meteor.startup(async () => {
  // Criar nossa Publish
  Meteor.publish("links", function () {
    return LinksCollection.find();
  });
});

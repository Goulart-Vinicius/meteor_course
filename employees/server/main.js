import { Meteor } from "meteor/meteor";
import { Employees } from "../imports/collections/employees";
import _ from "lodash";
import { faker } from "@faker-js/faker";

function createFaker() {
  return {
    username: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    phone: faker.phone.number(),
  };
}

Meteor.startup(async () => {
  const numbeRecord = await Employees.find({}).countAsync();

  if (numbeRecord == 0) {
    _.times(5000, async () => {
      const { username, email, phone, avatar } = createFaker();
      await Employees.insertAsync({
        username,
        email,
        phone,
        avatar,
      });
    });
  }

  Meteor.publish("employees", async function (number_records) {
    return await Employees.find({}, { limit: number_records });
  });
});

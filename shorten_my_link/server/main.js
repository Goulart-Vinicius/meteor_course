import { Meteor } from "meteor/meteor";
import { WebApp } from "meteor/webapp";
import ConnectRoute from "connect-route";

import { Links } from "../imports/collections/Links";

const middleware = ConnectRoute((router) => {
  router.get("/:token", onRoute);
});

WebApp.connectHandlers.use(middleware);

Meteor.startup(async () => {
  Meteor.publish("link", () => {
    const cursors = Links.find({}, { sort: { insert_date: -1 }, limit: 5 });
    return cursors;
  });
});

async function onRoute(req, res, next) {
  const link = await Links.findOneAsync({ token: req.params.token });

  if (link) {
    await Links.updateAsync(link, { $inc: { clicks: 1 } });
    res.writeHead(307, { Location: link.url });
    res.end();
  } else {
    next();
  }
}

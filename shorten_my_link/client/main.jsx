import React from "react";
import { createRoot } from "react-dom/client";
import { Meteor } from "meteor/meteor";

import Link_list from "./components/Links_list";
import Header from "./components/Header";
import Link_Create from "./components/Link_create";

function App() {
  return (
    <>
      <Header />
      <main className="flex items-center flex-col ">
        <Link_Create />
        <Link_list />
      </main>
    </>
  );
}

Meteor.startup(() => {
  const root = createRoot(document.getElementById("root"));
  root.render(<App />);
});

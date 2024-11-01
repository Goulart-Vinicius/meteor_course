import { Template } from "meteor/templating";
import { createRoot } from "react-dom/client";
import { App } from "../imports/ui/App";
import "./main.html"; // Importando o arquivo HTML
import React from "react";

Template.reactTarget.onRendered(() => {
  const container = document.getElementById("react-target");
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  } else {
    console.error("Contêiner DOM não encontrado.");
  }
});

Meteor.startup(() => {
  const container = document.getElementById("react-target");
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  } else {
    console.error("Contêiner DOM não encontrado.");
  }
});

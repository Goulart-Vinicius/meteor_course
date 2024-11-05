import { Template } from "meteor/templating";
import { createRoot } from "react-dom/client";
import { App } from "../imports/ui/App";
import "./main.html"; // Importando o arquivo HTML
import React from "react";
import { Bins } from "../imports/api/bins";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bin_main from "../imports/ui/bin_workspace/Bin_main";
import Bin_list from "../imports/ui/home/Bin_list";

Template.reactTarget.onRendered(() => {
  const container = document.getElementById("react-target");
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  } else {
    console.error("Contêiner DOM não encontrado.");
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Bin_list />
      },
      {
        path: "bin/:binId",
        element: <Bin_main />,
      },
    ],
  },
]);

Meteor.startup(() => {
  const container = document.getElementById("react-target");
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  } else {
    console.error("Contêiner DOM não encontrado.");
  }
});

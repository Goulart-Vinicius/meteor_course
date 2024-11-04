import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";

export const App = () => {
  return (
    <>
      <Header />
      <main className="flex justify-center w-full flex-col">
        <Outlet />
      </main>
    </>
  );
};

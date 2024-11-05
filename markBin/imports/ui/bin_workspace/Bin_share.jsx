import React, { useRef, useState } from "react";
import { useTracker } from "meteor/react-meteor-data";

export default function Bin_share({ bin }) {
  const emailInput = useRef("");
  const [error, setError] = useState("");

  async function onShareClick() {
    const email = emailInput.current.value;
    emailInput.current.value = "";
    const { error } = await Meteor.callAsync(
      "bins.updateShared",
      bin._id,
      email
    );

    setError(error);
  }

  const sharedEmails = bin.sharedWith.map((email) => {
    return (
      <li
        className="focus-visible:border-gray-700 border-4 border-transparent p-4 shadow-lg rounded-md
          hover:shadow-xl active:shadow-md min-w-52 transition  bg-white "
        key={email}
      >
        {email}
      </li>
    );
  });

  return (
    <footer className="w-full px-8 py-4  bg-slate-300 ">
      <div className=" flex justify-center">
        <div className="flex flex-col w-full ">
          <input
            type="email"
            className="focus-visible:border-gray-700 border-4 h-16 shadow-lg p-2 border-transparent  rounded-md
          hover:shadow-xl active:shadow-md transition"
            ref={emailInput}
          />
          <span className="text-red-500">{error}</span>
        </div>
        <button
          type="button"
          className="focus-visible:border-gray-700 border-4 h-16 border-transparent  p-4 mx-4 shadow-lg rounded-md
          hover:shadow-xl active:shadow-md  transition w-40 bg-white"
          onClick={onShareClick}
        >
          Share
        </button>
      </div>
      <div className="my-4">
        <h3 className="text-3xl font-bold">Shared With</h3>
        <ul className="flex flex-wrap flex-1 my-4 gap-4">{sharedEmails}</ul>
      </div>
    </footer>
  );
}

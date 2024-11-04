import React, { useRef, useState } from "react";
import { useTracker } from "meteor/react-meteor-data";

export default function Bin_share({ bin }) {
  const emailInput = useRef("");
  const [error, setError] = useState("");

  async function onShareClick() {
    const email = emailInput.current.value;
    emailInput.current.value = "";
    const {error} = await Meteor.callAsync("bins.updateShared", bin._id, email)
    
    setError(error);
  }
  return (
    <footer className="w-full">
      <div className=" flex justify-center px-8 my-4">
        <input
          type="email"
          className="focus-visible:border-gray-700 border-4 shadow-lg w-1/4 p-2 border-transparent  rounded-md
        hover:shadow-xl active:shadow-md transition"
          ref={emailInput}
        />
        <button
          type="button"
          className="focus-visible:border-gray-700 border-4 border-transparent  p-4 mx-4 shadow-lg rounded-md
        hover:shadow-xl active:shadow-md  transition w-40"
          onClick={onShareClick}
        >
          Share
        </button>
      </div>
      <span>{error}</span>
    </footer>
  );
}

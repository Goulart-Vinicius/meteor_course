import React from "react";
import Account from "./accounts";
import { Link, redirect, useNavigate } from "react-router-dom";

export default function Header() {
  const buttonClass = `
    shadow-md
    rounded-md 
    p-2 min-w-28 
    bg-white
    hover:shadow-xl
    active:shadow-sm
    transition
  `;

    const navigate = useNavigate()

  async function onCreateBinClick() {
    const bin = await Meteor.callAsync("bins.insert");
    return navigate(`/bin/${bin}`)
  }

  return (
    <header className="w-full">
      <nav className="flex justify-between items-center bg-slate-300 p-4">
        <Link className="font-medium text-xl" to="/">
          MarkBin
        </Link>
        <div className="flex justify-around items-center gap-4">
          <button className={buttonClass} type="button">
            <Account />
          </button>
          <button
            className={buttonClass}
            type="button"
            onClick={onCreateBinClick}
          >
            Create bin
          </button>
        </div>
      </nav>
    </header>
  );
}

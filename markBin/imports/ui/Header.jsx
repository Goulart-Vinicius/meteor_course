import React from "react";
import Account from "./accounts";

export default function Header() {
  const buttonClass = `
    shadow-md
    rounded-md 
    p-2 w-28 
    bg-white
    hover:shadow-xl
    active:shadow-sm
    transition
  `;

  return (
    <header className="w-full">
      <nav className="flex justify-between items-center bg-slate-300 p-4">
        <h1 className="font-medium text-xl">MarkBin</h1>
        <div className="flex justify-around items-center gap-4">
          <button className={buttonClass} type="button">
            <Account />
          </button>
          <button className={buttonClass} type="button">
            Create bin
          </button>
        </div>
      </nav>
    </header>
  );
}

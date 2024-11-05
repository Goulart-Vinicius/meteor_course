import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Bin_detail({ bin }) {
  async function onDeleteClick() {
    await Meteor.callAsync("bins.remove", bin);
  }

  return (
    <li className="p-2 border-2 m-2 hover:shadow-sm cursor-pointer transition flex justify-between items-center">
      {bin.name} {new Date(bin.created_at).toLocaleDateString()}
      <div>
        <Link
          className="m-2 p-2 px-4 bg-blue-600 text-white rounded-md hover:shadow-lg transition active:shadow-md"
          to={`/bin/${bin._id}`}
        >
          <FontAwesomeIcon icon={faPenNib} />
        </Link>
        <button
          className="m-2 p-2 px-4 bg-red-700 text-white rounded-md hover:shadow-lg transition active:shadow-md"
          type="button"
          onClick={onDeleteClick}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
}

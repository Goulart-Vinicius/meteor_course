import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export default function RateNav() {
  const [likeState, setLikeState] = useState("neutral");

  function likeHandleClick() {
    switch (likeState) {
      case "neutral":
        setLikeState("like");
        break;
      case "like":
        setLikeState("neutral");
        break;
      case "deslike":
        setLikeState("like");
    }
    console.log(likeState);
  }

  function deslikeHandleClick() {
    switch (likeState) {
      case "neutral":
        setLikeState("deslike");
        break;
      case "like":
        setLikeState("deslike");
        break;
      case "deslike":
        setLikeState("neutral");
    }
    console.log(likeState);
  }

  return (
    <div className="flex gap-2 items-center justify-between">
      <button
        type="button"
        className={`p-2 ${
          likeState == "like" ? "text-blue-700" : "text-gray-800"
        } hover:text-blue-900`}
        onClick={likeHandleClick}
      >
        <FontAwesomeIcon icon={faThumbsUp} className="size-8" />
      </button>
      <button
        type="button"
        className={`p-2 ${
          likeState == "deslike" ? "text-blue-700" : "text-gray-800"
        } hover:text-blue-900`}
        onClick={deslikeHandleClick}
      >
        <FontAwesomeIcon icon={faThumbsDown} className="size-8" />
      </button>
    </div>
  );
}

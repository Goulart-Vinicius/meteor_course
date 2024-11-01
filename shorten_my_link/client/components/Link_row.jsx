import React from "react";

export default function Link_row({ link }) {
  const shortLink = "http://localhost:3000/" + link.token;
  return (
    <tr className="border-b-2 text-left" key={link._id}>
      <td className="p-2">
        <a href={link.url}>{link.url}</a>
      </td>
      <td className="p-2">
        <a href={shortLink}>{shortLink}</a>
      </td>
      <td className="p-2 text-center">{link.clicks}</td>
    </tr>
  );
}

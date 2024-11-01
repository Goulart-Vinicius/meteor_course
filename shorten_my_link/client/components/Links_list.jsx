import React from "react";
import { Links } from "/imports/collections/Links";
import { useTracker, useSubscribe } from "meteor/react-meteor-data";
import Link_row from "./Link_row";

export default function LinkList() {
  const isLoading = useSubscribe("link");
  let links = useTracker(() => {
    return Links.find({}).fetch();
  });

  if (isLoading()) {
    return <div>Loading...</div>;
  }

  links = links.sort((a, b) => b.insert_date - a.insert_date);

  const linksRows = links.map((link) => (
    <Link_row key={link._id} link={link} />
  ));

  return (
    <div className="w-4/6 shadow-lg rounded-lg p-8">
      <table className="table-auto">
        <thead className="border-b-2 border-gray-900">
          <tr className="text-left">
            <th scope="col" className="p-2">
              Long link
            </th>
            <th scope="col" className="p-2">
              Short link
            </th>
            <th scope="col" className="p-2">
              Number of clicks
            </th>
          </tr>
        </thead>
        <tbody>{linksRows}</tbody>
      </table>
    </div>
  );
}

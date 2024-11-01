import React from "react";
import RateNav from './Rate_bar'

export default function ImageDetail({image}) {
  return (
    <li className="flex md:flex-row flex-col m-4 p-2 max-h-96 w-full justify-between items-center rounded-md shadow-md hover:shadow-xl ">
      <img
        className="rounded-sm min-w-64 w-3/6 h-full object-cover overflow-x-auto"
        src={image.urls.raw}
      />
      <section className="flex flex-col mx-4 w-full max-h-60 md:h-full items-end">
        <h2 className="font-sans text-4xl  pb-2 font-bold text-balance antialiased text-end">
          {image.alt_description}
        </h2>
        <p className="text-end">
          {image.description ?? "Sem descrição"}
        </p>
        <RateNav />
      </section>
    </li>
  );
}

//Criar nosso image list

// Importar React
import React, { useEffect, useState } from "react";
import ImageDetail from "./Image_datail";
import Axios from "axios";

const images = [
  { title: "Pen", link: "https://dummyimage.com/600x400/000/fff" },
  { title: "Pine Tree", link: "https://dummyimage.com/600x400/000/fff" },
  { title: "Mug", link: "https://dummyimage.com/600x400/000/fff" },
];

// Criar nosso componente
function ImageList({ images }) {
  const renderedList = images.map((image) => {
    return <ImageDetail key={image.id} image={image} />;
  });

  return (
    <ul className="w-3/4 flex flex-col justify-center items-center">
      {renderedList}
    </ul>
  );
}

// Exportar nosso componente
export default ImageList;

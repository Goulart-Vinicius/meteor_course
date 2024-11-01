//importar React
import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";
import Axios from "axios";

// Importar Component ImageList
import ImageList from "./components/Image_list";

// Criar um componente

function App() {
  const [imagesList, setimagesList] = useState([]);

  useEffect(() => {
    Axios("https://api.unsplash.com/photos/", {
      method: "GET",
      headers: {
        Authorization: "Client-ID 8vgI9dttdSXjtsK5_EMF8jf7D6NDnlT2uMvlMmZiqLk",
      },
    }).then((response) => {
      setimagesList(response.data);
    });
  }, []);

  return <ImageList images={imagesList} />; /* Renderizar nosso Component*/
}

/*
 * Meteor.startup é uma função que executa um função quando
 * o projeto Meteor já estiver carregado.
 */

Meteor.startup(() => {
  // Renderizar o Component
  const root = createRoot(document.querySelector("#root"))
  root.render(<App />);
});

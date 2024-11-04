import React, { useEffect, useRef } from "react";
import { Template } from "meteor/templating";
import { Blaze } from "meteor/blaze";

export default function Account() {
  const container = useRef(null);

  useEffect(() => {
    // Renderiza o template Blaze dentro do container referenciado
    const view = Blaze.render(Template.loginButtons, container.current);

    // Função de limpeza para remover a view Blaze quando o componente React desmontar
    return () => {
      Blaze.remove(view);
    };
  }, []);

  return <div ref={container}></div>;
}

import React, { useRef, useState } from "react";

export default function Link_Create() {
  const input = useRef(null); // Referenca a tag de input, com a ref podemos acessar diretamente o node do DOM
  const [error, setError] = useState({ error: "" }); // Estado para controlar mensagem de erro

  async function handleSubmit(event) {
    //fução de envio do formulário
    event.preventDefault(); // previne evento padrão do Submit

    //chama um Meteor Method chamado link.insert
    const error = await Meteor.callAsync("link.insert", input.current.value);
    setError(error)
  }

  //renderiza componente
  return (
    <form
      onSubmit={handleSubmit}
      className="w-4/6 flex my-8 px-4 py-8 flex-col gap-4 rounded-lg shadow-xl"
    >
      <div className="flex flex-col justify-center gap-2">
        <label className="w-fit font-bold px-2" htmlFor="link_input">
          Link to <span className="text-pink-700">shorten</span>
        </label>
        <input
          ref={input}
          className="
            border-2 rounded-lg h-10
            hover:border-gray-500 focus:shadow-lg
            hover:shadow-lg
            p-2
          "
          type="text"
          name="link"
          id="link_input"
          required
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <button
          className="
          p-2 shadow-md rounded-md
          font-semibold
          text-lg text-white bg-pink-950
          hover:shadow-xl w-4/6
        "
          type="submit"
        >
          Submit
        </button>
        <span className={`text-sm text-red-600 `}>{error.error}</span>
      </div>
    </form>
  );
}

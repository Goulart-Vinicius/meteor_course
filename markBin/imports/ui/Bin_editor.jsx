import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

export default function Bin_editor({ bin }) {
  console.log(bin);
  const onChange = React.useCallback(async (val, viewUpdate) => {
    await Meteor.callAsync("bins.update", bin._id, val);
  }, []);

  return (
    <div className="m-4 w-full text-4xl h-full">
      <h2>Input</h2>
      <CodeMirror
        className="py-4 text-lg"
        value={bin.content}
        height="48rem"
        theme="dark"
        extensions={[
          markdown({ base: markdownLanguage, codeLanguages: languages }),
        ]}
        onChange={onChange}
      />
    </div>
  );
}

import React, { useEffect, useRef } from "react";
import Markdown from "markdown-to-jsx";
import DOMPurify from "dompurify";
import "./Bin_viwer.css";

export default function BinViewer({ content }) {
  const containerRef = useRef(null);
  const sanitizedContent = DOMPurify.sanitize(content);
  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [sanitizedContent]);

  return (
    <div className="w-full m-4 h-full box-content">
      <h2 className="text-4xl">Output</h2>
      <div
        id="markdown-container"
        className="border-2 p-4 my-4 h-full overflow-y-scroll"
        ref={containerRef}
      >
        <Markdown id="markdown">{sanitizedContent}</Markdown>
      </div>
    </div>
  );
}

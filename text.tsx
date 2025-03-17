import React, { useState } from "react";

export default function TextSearchApp() {
  const [text, setText] = useState("This is a sample paragraph. You can search any word in this text.");
  const [query, setQuery] = useState("");

  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, index) =>
      regex.test(part) ? <mark key={index}>{part}</mark> : part
    );
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <textarea
        className="w-full p-2 border rounded"
        rows="4"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <input
        type="text"
        className="w-full p-2 border rounded mt-2"
        placeholder="Search for a word..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="mt-4 p-2 border rounded bg-gray-100">
        {highlightText(text, query)}
      </div>
    </div>
  );
}
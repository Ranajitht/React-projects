import React, { useState } from "react";

function NoteForm({ addNote }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addNote(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a note"
        className="p-2 w-[80%] mr-[10px] "
      />
      <button
        className="p-2 bg-[#6200ea] text-[#fff] border-none rounded cursor-pointer hover:bg-[#3700b3] "
        type="submit"
      >
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;

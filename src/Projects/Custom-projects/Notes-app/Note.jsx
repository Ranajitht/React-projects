import React from "react";

function Note({ note, deleteNote }) {
  return (
    <div className="flex justify-between p-2 bg-[#f9f9f9] mb-2 rounded-lg ">
      <p>{note.text}</p>
      <button
        className="p-2 bg-[#ea0000f5] text-[#fff] border-none rounded cursor-pointer hover:bg-[#b37b7b]"
        onClick={() => {
          deleteNote(note.id);
        }}
      >
        &times;
      </button>
    </div>
  );
}

export default Note;

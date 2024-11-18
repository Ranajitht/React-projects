import React from "react";
import { MdDeleteForever, MdOutlineNoteAlt } from "react-icons/md";

function NewNote({note, onClick, text}) {
  return (
    <div className="flex justify-center bg-red-500 h-[25%] w-[25%] self-center flex-col">
      <div>
        <MdOutlineNoteAlt />
        <MdDeleteForever onClick={() => onClick(note.id) } />
      </div>
      <div><textarea>{text}</textarea></div>
    </div>
  );
}

export default NewNote;

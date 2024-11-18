import React, { useState } from "react";
import NewNote from "./NewNote";
import Button from "../components/Button";
import { v4 as uuidv4 } from "uuid";

function NotesApp() {
  const [notes, setNotes] = useState([]);

  const addNewNote = (newNote) => {
    const newNotes = [...notes, newNote];
    newNotes.filter((note) => !note.id && (note.id = uuidv4()));
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    setNotes(
      notes.filter(() => {
        note.id !== id;
      })
    );
  };

  return (
    <div className="w-[25%] h-[25%] flex justify-center self-center bg-yellow-400 ">
      <Button btnClass={""} text={"+ New Note"} onClick={addNewNote} />
      <div className="w-[25%] h-[25%] flex justify-center self-center bg-yellow-400">
        {notes.map((note) => {
          <NewNote key={note.id} note={note} onClick={deleteNote} />;
        })}
      </div>
    </div>
  );
}

export default NotesApp;

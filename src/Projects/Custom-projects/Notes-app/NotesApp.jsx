import React, { useState } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

function NotesApp() {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    setNotes([...notes, { id: Date.now(), text}]);
  };

  const deleteNote = (id) => {
    setNotes(
      notes.filter((note) => {
        note.id !== id;
      })
    );
  };

  return (
    <div className="text-center max-w-[600px] m-auto">
      <h1>NotesApp</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default NotesApp;

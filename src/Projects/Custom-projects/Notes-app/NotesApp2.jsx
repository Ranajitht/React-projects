// src/NotesApp.js
import React, { useState } from "react";

function NotesApp2() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  // Function to handle adding a new note
  const addNote = () => {
    if (noteText.trim()) {
      setNotes([...notes, { id: Date.now(), text: noteText }]);
      setNoteText("");
    }
  };

  // Function to handle deleting a note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const [editingId, setEditingId] = useState(null);

  const updateNote = (id, newText) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, text: newText } : note))
    );
    setEditingId(null);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notes App</h1>
      <div className="mb-4">
        <input
          type="text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Write a note..."
          className="border p-2 rounded w-full"
        />
        <button
          onClick={addNote}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Note
        </button>
      </div>
      <ul className="space-y-2">
        {notes.map((note) => (
          <li
            key={note.id}
            className="border p-2 rounded flex justify-between items-center"
          >
            <span>{note.text}</span>
            <button
              onClick={() => deleteNote(note.id)}
              className="text-red-500 font-bold"
            >
              &times;
            </button>
            {editingId === note.id ? (
              <input
                type="text"
                value={note.text}
                onChange={(e) => updateNote(note.id, e.target.value)}
                onBlur={() => setEditingId(null)} // Save and exit editing mode on blur
              />
            ) : (
              <span onClick={() => setEditingId(note.id)}>{note.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesApp2;

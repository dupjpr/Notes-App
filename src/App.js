import React, { useState } from 'react';
import Header from "./components/Header";
import Notes from "./components/Notes";
import NotesForm from "./components/NotesForm";

import './components/style/app.css';

function App() {

  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState([]);

  const handleEdit = (id) => {
    const editNote = notes.filter((note) => note.id === id);
    setNotes(filterNotes(id));
    setEditNote(editNote);
  }

  const filterNotes = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    return newNotes
  }

  const color = () => {

    const rgbColor = {};

    const random = () => {
      const colorNum = 255;
      return Math.floor(Math.random() * colorNum);
    }

    rgbColor.r = random();
    rgbColor.g = random();
    rgbColor.b = random();

    return rgbColor;
  }

  const handleSubmit = (e, note, setNote) => {
    e.preventDefault();
    setNotes([...notes, {
      note: note,
      id: Math.random(),
      date: new Date().toLocaleDateString(),
      color: color()
    }])
    const formInput = document.querySelector('.notesForm-input');
    formInput.value = '';
    setNote('');
  }

  const handleDelete = (id) => {
    setNotes(filterNotes(id));
  }

  return (
    <div className="App">
      <Header />
      <Notes notes={notes} handleDelete={handleDelete} handleEdit={handleEdit} />
      <NotesForm handleSubmit={handleSubmit} editNote={editNote} />
    </div>
  );
}

export default App;

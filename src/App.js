import React, { useState} from 'react';
import Header from "./components/Header";
import Notes from "./components/Notes";
import NotesForm from "./components/NotesForm";

function App() {

  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState([]);
  
  const handleEdit = (id) => {
    const editNote = notes.filter((note) => note.id === id );
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    setEditNote(editNote);
  }

  const handleSubmit = (e, note) => {
    console.log(note);
    e.preventDefault();
    setNotes([...notes, {note:note, id:Math.random(), date:new Date()}])
    const formInput = document.querySelector('.notesForm-input');
    formInput.value = '';
  }

  const handleDelete = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className="App">
      <Header />
      <Notes notes={notes} handleDelete={handleDelete} handleEdit={handleEdit}/>
      <NotesForm handleSubmit={handleSubmit} editNote={editNote}/>
    </div>
  );
}

export default App;

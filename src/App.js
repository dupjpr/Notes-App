import React, { useState} from 'react';
import Header from "./components/Header";
import Notes from "./components/Notes";
import NotesForm from "./components/NotesForm";

function App() {

  const [notes, setNotes] = useState([]);

  const handleSubmit = (e, note, setNote) => {
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
      <Notes notes={notes} handleDelete={handleDelete}/>
      <NotesForm handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;

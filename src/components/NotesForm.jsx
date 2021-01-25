
import { useState, useEffect } from "react";

import './style/notesForm.css';


const NotesForm = ({ handleSubmit, editNote }) => {

    const [note, setNote] = useState('Empty');

    useEffect(() => {
        const formInput = document.querySelector('.notesForm-input');
        editNote.length === 0 ? formInput.value = '': formInput.value = editNote[0].note;
        setNote(formInput.value);
    }, [editNote]);

    const handleChange = (e) => {
        setNote(e.target.value)
    }

    return (
        <div className="notesForm">
            <h2>Write your Notes</h2>
            <form className='notesForm-form' onSubmit={(e) => handleSubmit(e, note, setNote)}>
                <textarea onChange={(e) => handleChange(e)} placeholder='write a new note' name="notes" className='notesForm-input' cols="45" rows="7"></textarea>
                <button className='notesForm-button' type='submit'>Save</button>
            </form>
        </div>
    );
}

export default NotesForm;
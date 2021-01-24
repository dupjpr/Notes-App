
import { useState, useEffect } from "react";

const NotesForm = ({ handleSubmit, editNote }) => {

    const [note, setNote] = useState('Empty');

    useEffect(() => {
        const formInput = document.querySelector('.notesForm-input');
        editNote.length == 0 ? formInput.value = '': formInput.value = editNote[0].note;
        setNote(formInput.value);
    }, [editNote]);

        console.log(note);
    const handleChange = (e) => {
        setNote(e.target.value)
    }

    return (
        <div className="notesForm">
            <h2>Write your Notes</h2>
            <form onSubmit={(e) => handleSubmit(e, note, setNote)}>
                <textarea onChange={(e) => handleChange(e)} name="notes" className='notesForm-input' cols="30" rows="10"></textarea>
                <button type='submit'>Save</button>
            </form>
        </div>
    );
}

export default NotesForm;
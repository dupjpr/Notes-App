
import { useState } from "react";

const NotesForm = ({ handleSubmit }) => {

    const [note, setNote] = useState('Empty');

    const handleChange = (e) => {
        setNote(e.target.value)
    }

    
    return ( 
        <div className="notesForm">
            <h2>Write your Notes</h2>
            <form onSubmit={(e) => handleSubmit(e, note, setNote)}>
                <input className='notesForm-input' type="text" onChange={(e) => handleChange(e)}/>
                <button type='submit'>Save</button>
            </form>
        </div>
     );
}
 
export default NotesForm;
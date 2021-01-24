
import { Fragment } from "react";

import './style/notes.css';

const Notes = ({ notes, handleDelete, handleEdit }) => {

    return (
        <Fragment>
            {notes.map((note) => (
                <div className="notes" key={note.id}>
                    <div className='notes-note'>{note.note}</div>
                    <div className="notes-tools">
                        <span onClick={(e) => handleEdit(note.id)}><i className="fas fa-pencil-alt"></i></span>
                        <span onClick={(e) => handleDelete(note.id)}><i className="fas fa-trash-alt"></i></span>
                    </div>
                </div>
            ))}

        </Fragment>
    );
}

export default Notes;
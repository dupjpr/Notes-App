  
import { Fragment } from "react";

const Notes = ({ notes, handleDelete }) => {

    return (
        <Fragment>
            {notes.map((note) => (
                <div className="notes" key={note.id}>
                    <div>{note.note}</div>
                    <span onClick={(e) => handleDelete(note.id)}><i className="fas fa-trash-alt"></i></span>
                </div>
            ))}

        </Fragment>
    );
}

export default Notes;
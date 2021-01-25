


import './style/notes.css';

const Notes = ({ notes, handleDelete, handleEdit }) => {

    return (
        <div className="note-section">
            <h2>My Notes</h2>
            <div className="notes">
                {notes.map((note) => (
                    <div className="note" key={note.id}>
                        <div className="colorTag" style={{backgroundColor: `rgb( ${note.color.r}, ${note.color.g}, ${note.color.b} )` }}></div>
                        <div className='note-note'>{note.date} | {note.note}</div>
                        <div className="note-tools">
                            <span onClick={(e) => handleEdit(note.id)}><i className="fas fa-pencil-alt"></i></span>
                            <span onClick={(e) => handleDelete(note.id)}><i className="fas fa-trash-alt"></i></span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Notes;
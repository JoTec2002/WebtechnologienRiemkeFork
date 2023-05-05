
import Note from './Note';
import AddNote from './AddNote';
import { useState } from 'react';
const defaultNotes = [
    { id: 1, text: "Notiz1", autor: "Fritzchen" },
    { id: 2, text: "Notiz 2", autor: "Hänschen" },
    { id: 3, text: "Notiz 3", autor: "Gretel" }

];
export default function NotesList() {
    const [notes, setNotes] = useState(defaultNotes)
    const handleAddNote = (note) => {
        //magic
        const newNote = { id: notes.length + 1, text: note, autor: 'ich' }
        const newNotes = [...notes, newNote];
        // newNotes.push(newNote)
        setNotes(newNotes)
    }
    return (
        <div>
            <h1>Notes</h1>
            <div className='flex flex-row flex-wrap'>
                {
                    notes.map((note) =>
                        <Note text={note.text} key={note.id} />
                    )
                }
                <AddNote handleAddNote={handleAddNote} />
            </div>
        </div>
    );

}

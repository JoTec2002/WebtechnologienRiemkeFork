
import Note from './Note';
import AddNote from './AddNote';
import { useState, useEffect } from 'react';
import cuid from '@bugsnag/cuid'

export default function NotesList() {
    const [notes, setNotes] = useState([])
    const handleAddNote = (note) => {
        //magic
        const newNote = { id: notes.length + 1, text: note, autor: 'ich' }
        const newNotes = [...notes, newNote];
        // newNotes.push(newNote)
        setNotes(newNotes)
        const reqOpt = {
            method: 'POST',
            mode: 'no-cors',
            headers: {}
        }

    }

    useEffect(() => {
        fetch('/api/notes')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setNotes(data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    return (
        <div>
            <h1>Notes</h1>
            <div className='flex flex-row flex-wrap'>
                {
                    notes.map((note) =>
                        <Note text={note.text} key={note.id} />
                    )
                }

            </div>
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );

}


import Note from './Note';
import AddNote from './AddNote';
import { useState, useEffect } from 'react';
import cuid from '@bugsnag/cuid'

export default function NotesList() {
    const [notes, setNotes] = useState([])
    const handleAddNote = (note) => {

        // newNotes.push(newNote)

        const reqOpt = {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: note, autor: 'ich' })
        }
        fetch('/api/notes', reqOpt)
            .then(response => response.json())
            .then(result => {
                if (result.id == 0) {
                    console.log('error')
                    return;
                }
                console.log(result)
                const newNote = { id: result.id, text: note, autor: 'ich' }
                const newNotes = [...notes, newNote];
                setNotes(newNotes)
            })
            .catch(err => console.log(err))
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

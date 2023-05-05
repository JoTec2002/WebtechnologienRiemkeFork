import { use, useState } from "react"
import Note from './Note'
export default function AddNote(props) {
    const [note, setNote] = useState('')
    const handleNoteChange = (event) => {
        setNote(event.target.value)
    }

    const addNote = () => {
        props.handleAddNote(note);
        setNote('');
    }
    return (
        <div>
            <Note text={note} />
            <input
                type="text"
                className="border border-black p-2"
                onChange={handleNoteChange}
                placeholder="Neue Notiz"
                value={note}
            />
            <button
                className="bg-blue-500 rounded-lg text-white p-2 m-2"
                onClick={addNote}
            >Anlegen</button>

        </div>

    )
}
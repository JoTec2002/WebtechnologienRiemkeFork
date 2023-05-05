import { use, useState } from "react"
import Note from './Note'
export default function AddNote(props) {
    const [note, setNote] = useState('')
    const [edit, setEdit] = useState(false)
    const handleNoteChange = (event) => {
        setNote(event.target.value)
    }

    const addNote = () => {
        if (note != '') {
            props.handleAddNote(note);
        }
        setNote('')
        setEdit(false)
    }
    const enableEdit = () => {
        setEdit(true)
    }

    if (edit) {
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
    } else {
        return (
            <div className="block m-5">
                <button className="rounded-full bg-sky-500 w-16 h-16 text-white" onClick={enableEdit}>+</button>
            </div>
        )
    }
}
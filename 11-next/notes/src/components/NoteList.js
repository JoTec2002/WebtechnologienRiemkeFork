
import Note from './Note';
export default function NotesList() {
    const notes = [
        { id: 1, text: "Notiz1", autor: "Fritzchen" },
        { id: 2, text: "Notiz 2", autor: "Hänschen" },
        { id: 3, text: "Notiz 3", autor: "Gretel" }

    ];
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
        </div>
    );

}

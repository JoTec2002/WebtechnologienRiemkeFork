import Navigation from '../components/Navigation';
import NoteList from '../components/NoteList';
export default function Notes(){
    return(
        <div>
            <Navigation/>
            <div className='m-5'>
                <NoteList/>
            </div>
           
        </div>
    )
}
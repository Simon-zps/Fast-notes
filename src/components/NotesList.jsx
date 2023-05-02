import Note from "./Note";
import classes from "./NotesList.module.css";
import { useLoaderData } from 'react-router-dom';

function NotesList(){
    const notes = useLoaderData();


    return(
        <>
        { notes.length === 0 && ( 
        
        <div className={classes.emptyNotes}>
            <h1>There are no notes...</h1>
            <p>Click on the plus icon to add a note :)</p>
        </div> )} 
        
        { notes.length > 0 && (
        <ul className={classes.notes}>
            {notes.map((note) => (
                <Note name={note.name} content={note.content}/>
            ))}
        </ul>
        )}
        </>
    );
}

export default NotesList;
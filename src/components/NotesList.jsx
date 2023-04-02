import Note from "./Note";
import classes from "./NotesList.module.css";
import AddNote from "./AddNote";
import { useState } from "react";

function NotesList(props){

    const [notes, setNotes] = useState([
        { name: "Simon", content: "Lorem ipsum dolor sit amet"},
        { name: "Jane", content: "Consectetur adipiscing elit" },
        { name: "Bob", content: "Sed do eiusmod tempor incididunt" },
        { name: "Mark", content: "Anywhere eiusmod tempor incididunt" }
    ]);

    function handleNewNote(note) {
        setNotes(prevNotes => [...prevNotes, note]);
        props.displayAddNote();
    }

    return(
        <>
        { props.newNote ? <AddNote addNote={handleNewNote}/> : null }
        
        <ul className={classes.notes}>
            {notes.map((note) => (
                <Note name={note.name} content={note.content}/>
            ))}
        </ul>
        </>
    );
}

export default NotesList;
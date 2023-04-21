import Note from "./Note";
import classes from "./NotesList.module.css";
import { useState, useEffect } from "react";

function NotesList(props){

    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchNotes() {
            setIsLoading(true);
            const response = await fetch('http://localhost:8080/posts');
            const data = await response.json();
            console.log(data.posts);
            setNotes(data.posts);
            setIsLoading(false);
        }

        fetchNotes();
    }, []);

    function handleNewNote(note) {

        fetch('http://localhost:8080/posts',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(note)
        }).then(() => {
            console.log('New note added');
        })

        setNotes(prevNotes => [...prevNotes, note]);
        props.displayUserForm();
    }

    return(
        <>
        { notes.length === 0 && !isLoading && ( 
        
        <div className={classes.emptyNotes}>
            <h1>There are no notes...</h1>
            <p>Click on the plus icon to add a note :)</p>
        </div> )} 
        
        { !isLoading && notes.length > 0 && (
        <ul className={classes.notes}>
            {notes.map((note) => (
                <Note name={note.name} content={note.content}/>
            ))}
        </ul>
        )}

        { isLoading && (<p className={classes.loading}>Loading...</p>
        )}
        </>
    );
}

export default NotesList;
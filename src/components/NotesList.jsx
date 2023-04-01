import Note from "./Note";
import classes from "./NotesList.module.css";

function NotesList(){

    const notes = [
        { name: "Simon", content: "Lorem ipsum dolor sit amet"},
        { name: "Jane", content: "Consectetur adipiscing elit" },
        { name: "Bob", content: "Sed do eiusmod tempor incididunt" },
        { name: "Mark", content: "Anywhere eiusmod tempor incididunt" }
    ];

    return(
        <ul className={classes.notes}>
            {notes.map((note) => (
                <Note name={note.name} content={note.content}/>
            ))}
        </ul>
    );
}

export default NotesList;
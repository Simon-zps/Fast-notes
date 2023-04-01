import classes from './Note.module.css';

function Note(props) {

    return (
    <li className={classes.note}>
        <h3>{props.name}</h3>
        <p>{props.content}</p>
    </li>
    );
}

export default Note;
import classes from './Note.module.css';
import {Link} from 'react-router-dom';

function Note(props) {

    return (
        <Link to={props.id} >
            <li className={classes.note}>
                <h3>{props.name}</h3>
                <p>{props.content}</p>
            </li>
        </Link>
    );
}

export default Note;
import classes from './NoteOverlay.module.css';
import Modal from '../Modal';
import { Link, Form, redirect} from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

function NoteOverlay() {
  const note = useLoaderData();

  return (
    <Modal>
      <div className={classes.noteInfo}>
        <h3>{note.name}</h3>
        <p>{note.content}</p>
      </div>
    </Modal>
  );
}

export default NoteOverlay;

export async function loader({ params }) {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);
  const data = await response.json();
  return data.post;
}


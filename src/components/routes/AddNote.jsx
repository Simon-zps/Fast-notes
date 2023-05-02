import classes from './AddNote.module.css';
import Modal from '../Modal';
import { Link, Form, redirect } from 'react-router-dom';

function AddNote() {

  return (
    <Modal>
        <Form method="post" className={classes.form}>
            <label htmlFor="text-input">Note:</label>
            <textarea id="text-input" name="content" required rows={4}></textarea><br/>

            
            <label htmlFor="name-input">Author:</label>
            <input type="text" id="name-input" name="name" required/><br/>
            
            <div className={classes.buttons}>
              <Link to="/"><input type="button" value="Cancel"/></Link>
              <input type="submit" value="Submit"/>
            </div>
            
        </Form>
    </Modal>
  );
}

export default AddNote;

export async function action({request}){
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);

  fetch('http://localhost:8080/posts',{
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(noteData)
}).then(() => {
    console.log('New note added');
})

  return redirect('/');
  //setNotes(prevNotes => [...prevNotes, note]);
}
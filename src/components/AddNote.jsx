import classes from './AddNote.module.css';

function AddNote(props) {
  // Make it centered and over page

  function handleSubmit(e) {
    e.preventDefault();
    const note = {
      name: e.target.elements["name-input"].value,
      content: e.target.elements["text-input"].value
    }

    props.addNote(note);
  }

  return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <label htmlFor="text-input">Note:</label>
            <textarea id="text-input" name="text-input" required rows={4}></textarea><br/>

            
            <label htmlFor="name-input">Author:</label>
            <input type="text" id="name-input" name="name-input" required/><br/>
            
            <div className={classes.buttons}>
              <input type="button" value="Cancel" onClick={props.displayUserForm}/>
              <input type="submit" value="Submit"/>
            </div>
            
        </form>
  );
}

export default AddNote;
import classes from './AddNote.module.css';

function AddNote() {
  return (
        <form className={classes.form}>
            <label htmlFor="text-input">Note:</label>
            <textarea id="text-input" name="text-input" required></textarea><br/>

            
            <label htmlFor="name-input">Author:</label>
            <input type="text" id="name-input" name="name-input" required/><br/>
            
            <input type="button" value="Cancel"/>
            <input type="submit" value="Submit"/>
            
        </form>
  );
}

export default AddNote;
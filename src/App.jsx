
import NotesList from './components/NotesList';
import { useState } from 'react';

function App() {

  const [newNote, setNewNote] = useState(false);

  function displayAddNote() {

    if (newNote === false) {
        setNewNote(true);
    } else {
        setNewNote(false);
    }
  }
  

  return (
  <>
    <div className="header">
      <h3>FAST <br/>NOTES</h3>

      <div className="addNote" onClick={displayAddNote} >
        <img src="images/post-icon.png" alt="Post icon"/>
      </div>
      
    </div>
    <NotesList newNote={newNote} displayAddNote={displayAddNote}/>
  </>
  );
}

export default App;

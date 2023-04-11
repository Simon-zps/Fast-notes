
import NotesList from './components/NotesList';
import { useState } from 'react';
import styles from './components/Note.module.css';

function App() {

  const [newNote, setNewNote] = useState(false);

 

  function displayAddNote() {
    const form = document.querySelector('.form');
    if (newNote === false) {
      const noteElements = document.querySelectorAll(`.${styles.note}`);
      
      for (let i = 0; i < noteElements.length; i++) {
        noteElements[i].style.backgroundColor = '#9b9b9b';
      }

      const addNoteElement = document.querySelector('.addNote');
      addNoteElement.style.backgroundColor = '#9b9b9b';

      setNewNote(true);
      document.body.classList.add('shadow');
      form.addEventListener('click', (event) => {
        event.stopPropagation();
      });
      
      

      
    } else {
        const noteElements = document.querySelectorAll(`.${styles.note}`);
        for (let i = 0; i < noteElements.length; i++) {
          noteElements[i].style.backgroundColor = '#ebeaea';
        }
        const addNoteElement = document.querySelector('.addNote');
        addNoteElement.style.backgroundColor = '#ebebea';
        

        setNewNote(false);
        document.body.classList.remove('shadow');
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


import NotesList from './components/NotesList';
import { useState } from 'react';

function App() {

  const [formVisible, setFormVisible] = useState(false);

  function displayUserForm() {

    if (formVisible === false) {
        setFormVisible(true);
    } else {
        setFormVisible(false);
    }
  }
  

  return (
  <>
    <div className="header">
      <h3>FAST <br/>NOTES</h3>

      <div className="addNote" onClick={displayUserForm} >
        <img src="images/post-icon.png" alt="Post icon"/>
      </div>
      
    </div>
    <NotesList formVisible={formVisible} displayUserForm={displayUserForm}/>
  </>
  );
}

export default App;

import NotesList from '../NotesList';
import {Outlet} from 'react-router-dom';

function App(props) {

  const { displayUserForm, formVisible } = props;
  
  return (
  <>
    <Outlet/>
    <NotesList formVisible={formVisible} displayUserForm={displayUserForm}/>
  </>
  );
}

export default App;  
 
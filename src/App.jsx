import NotesList from './components/NotesList';

function App() {
  return (
  <>
    <div class="header">
      <h3>FAST <br/>NOTES</h3>
      <input type="button" value="+ note" id="addNote" />
    </div>
    <NotesList/>
  </>
  );
}

export default App;

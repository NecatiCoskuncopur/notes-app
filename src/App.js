import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList'
import Search from './components/Search';
import Header from './components/Header'
function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'My first note',
      date: '20/03/2022'
    },
    {
      id: nanoid(),
      text: 'My second note',
      date: '21/03/2022'
    },
    {
      id: nanoid(),
      text: 'My third note',
      date: '22/03/2022'
    }

  ]);
  const [searchText, setSearchText] = useState('');
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-app-data'));
    if(savedNotes){
      setNotes(savedNotes)
    }
  },[])
  
  useEffect(() =>{
    localStorage.setItem('notes-app-data', JSON.stringify(notes))
  },[notes])
  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
   const newNotes =  notes.filter((note) => note.id !== id)
   setNotes(newNotes)
  }

  return (
    <div className={`${theme && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleTheme ={setTheme}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList
        notes={notes.filter((note) =>note.text.toLowerCase().includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote = {deleteNote}
        />
      </div>
    </div>
  );
}

export default App;

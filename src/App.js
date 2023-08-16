import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { NoteList, Search } from 'components';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-app-data'));
    if (savedNotes?.length !== 0) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const handleSearchNote = (text) => {
    setSearchText(text.toLowerCase());
  };
  return (
    <Container>
      <h1>Notes</h1>
      <Search handleSearchNote={handleSearchNote} />
      <NoteList
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
        setNotes={setNotes}
      />
    </Container>
  );
};

export default App;

const Container = styled.main`
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  min-height: 100vh;
  h1 {
    margin-bottom: 24px;
    padding-top: 24px;
  }
`;

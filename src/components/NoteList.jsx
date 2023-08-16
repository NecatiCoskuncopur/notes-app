import { nanoid } from 'nanoid';
import { styled } from 'styled-components';

import { Card } from 'components';

const NoteList = ({ notes, setNotes }) => {
  const handleAddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handleUpdateNote = (id, text) => {
    let newNote = notes.map((note) => {
      const date = new Date();
      if (note.id === id) {
        note.text = text;
        note.date = date.toLocaleDateString();
      }
      return note;
    });

    setNotes(newNote);
  };
  return (
    <Wrapper>
      {notes.map((note) => (
        <Card
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
          handleUpdateNote={handleUpdateNote}
        />
      ))}
      <Card
        handleAddNote={handleAddNote}
        isAddNote
      />
    </Wrapper>
  );
};

export default NoteList;

const Wrapper = styled.section`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

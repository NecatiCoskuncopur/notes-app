import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { styled } from 'styled-components';

import { colors } from 'theme';
import Button from './Button';

const Card = (props) => {
  const { id, text, date, handleDeleteNote, handleAddNote, handleUpdateNote, isAddNote = false } = props;

  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    }
  };

  return (
    <Wrapper $isAddNote={isAddNote}>
      {isAddNote ? (
        <textarea
          cols="10"
          rows="8"
          placeholder="Type to add a note..."
          value={noteText}
          onChange={handleChange}
        />
      ) : (
        <span
          onBlur={(e) => handleUpdateNote(id, e.target.innerText)}
          contentEditable="true"
          suppressContentEditableWarning={true}
        >
          {text}
        </span>
      )}
      <Footer>
        <small>{isAddNote ? `${characterLimit - noteText.length} Remaining` : date}</small>
        {isAddNote ? (
          <Button
            text="Save"
            onClick={handleSaveClick}
          />
        ) : (
          <MdDeleteForever
            className="delete-icon"
            onClick={() => handleDeleteNote(id)}
          />
        )}
      </Footer>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.article`
  background-color: ${colors.dolly};
  border-radius: 10px;
  padding: 16px;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ $isAddNote }) => $isAddNote && `background: ${colors.viking};`}
  span {
    word-wrap: break-word;
  }
  textarea {
    resize: none;
    background-color: ${colors.viking};
  }
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .delete-icon {
    font-size: 21px;
    cursor: pointer;
  }
`;

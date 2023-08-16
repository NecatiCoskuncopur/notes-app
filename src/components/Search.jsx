import { MdSearch } from 'react-icons/md';
import { styled } from 'styled-components';

import { colors } from 'theme';

const Search = ({ handleSearchNote }) => {
  return (
    <Wrapper>
      <MdSearch className="search-icon" />
      <input
        type="text"
        placeholder="type to search"
        onChange={(e) => handleSearchNote(e.target.value)}
      />
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  background-color: ${colors.eggShell};
  border-radius: 15px;
  padding: 5px;
  margin-bottom: 24px;
  height: 40px;
  input {
    background-color: ${colors.eggShell};
  }
`;

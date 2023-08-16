import { styled } from 'styled-components';

import { colors } from 'theme';

const Button = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  background-color: ${colors.mercury};
  border-radius: 15px;
  padding: 5px 10px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background-color: ${colors.gallery};
  }
`;

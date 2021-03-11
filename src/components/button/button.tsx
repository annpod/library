import styled from 'styled-components';

export const Button = styled.button`
  height: 35px;
  min-width: 35px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 1rem;
  outline: none;
  cursor: pointer;
  transition: 0.3s all;
  &:hover,
  &:focus {
    border: none;
  }
  &:disabled {
    cursor: default;
    opacity: 0.2;
  }
`;

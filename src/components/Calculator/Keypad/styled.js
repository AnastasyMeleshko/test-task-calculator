import styled from 'styled-components';

export const StyledKeyPad = styled.div`
  border-right: 2px solid #000000;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  grid-template-columns: repeat(5, 80px);
  grid-template-rows: minmax(45px, auto) repeat(3, 60px);
  gap: 20px;

  & button {
    height: 50px;
    border-radius: 15%;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    opacity: 1;
    outline: none;
  }

  & button:hover,
  & button:focus {
    opacity: 0.7;
    background-color: #b2d0ee;
  }

`;

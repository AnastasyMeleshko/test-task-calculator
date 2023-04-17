import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: #363638;
  font-size: 16px;
  padding: 20px 30px;
`;

export const StyledLogo = styled.p`
  font-family: Roboto Light, sans-serif;
  font-size: 1.5rem;
  color: #FFFFFF;
`;

export const NavigationItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavigationItem = styled.li`
  
  &:first-child {
    margin-right: 20px;
  }
`;

export const NavigationLink = styled.a`
  color: #FFFFFF;
  font-size: 1.2rem;
  transition: all ease 0.5s;

  &:hover {
    border-bottom: 1px solid #8bb0e0;
    color: #8bb0e0;
  }
`;

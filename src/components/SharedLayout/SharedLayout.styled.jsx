import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.nav`
  margin-left: -15px;
  margin-right: -15px;
  padding: 15px;

  display: flex;
  gap: 10px;
  background-color: darkblue;
  color: white;
  border: none;
  text-decoration: none;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;

  &.active {
    color: white;
    border-bottom: 1px solid #ffffff;
  }
`;

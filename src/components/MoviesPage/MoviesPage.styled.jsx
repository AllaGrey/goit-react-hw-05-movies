import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesSection = styled.div`
  padding-top: 30px;
`;

export const SearchForm = styled.form``;

export const Input = styled.input`
  outline: none;
  height: 30px;
  border-radius: 0;
  border: 1px solid darkblue;
`;

export const Button = styled.button`
  height: 34px;
  background-color: darkblue;
  color: white;
  border: none;
  cursor: pointer;
`;

export const MoviesList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  gap: 10px;
`;

export const MoviesListItem = styled.li`
  width: 250px;
  text-align: center;
  transition: transform 0.35s;
  :hover {
    transform: scale(1.05);
    box-shadow: 10px 10px 10px -8px rgba(0, 0, 0, 0.75);
  }
`;

export const MovieImg = styled.img`
  display: block;
  max-width: 100%;
`;

export const MoviesLink = styled(Link)`
  text-decoration: none;
  color: darkblue;
`;

export const MovieText = styled.p`
  height: 40px;
`;

export const NoPhoto = styled.p`
  height: 375px;
  text-align: center;
  margin: 0;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: lightblue;
`;

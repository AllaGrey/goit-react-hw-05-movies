import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomePageMoviesList = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
`;

export const HomePageMoviesItem = styled.li`
  padding: 0;
  transition: transform 0.35s;
  :hover {
    transform: scale(1.05);
    box-shadow: 10px 10px 10px -8px rgba(0, 0, 0, 0.75);
  }
`;

export const HomePageMoviesItemText = styled.p`
  max-width: 250px;
  padding: 15px;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

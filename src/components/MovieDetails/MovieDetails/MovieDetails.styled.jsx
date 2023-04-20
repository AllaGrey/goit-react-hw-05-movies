import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetailsSection = styled.div`
  padding-top: 20px;
`;

export const MainMovieInfo = styled.div`
  display: flex;
  gap: 15px;
  border-bottom: 2px solid darkblue;
  padding: 15px;
`;

export const MovieTextInfo = styled.div`
  max-width: 50vw;
`;

export const MovieImg = styled.img`
  display: block;
  max-width: 30vw;
`;

export const Title = styled.h1`
  font-size: 22px;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
`;

export const AddLink = styled(Link)`
  text-decoration: none;
  color: brown;
  font-size: 18px;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  width: 80px;
  height: 30px;
  border: 2px solid darkblue;
  font-weight: 600;
  color: darkblue;
  padding: 10px;

  :hover {
    background-color: darkblue;
    color: white;
  }
`;

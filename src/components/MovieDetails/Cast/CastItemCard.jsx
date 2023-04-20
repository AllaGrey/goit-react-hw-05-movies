import { CastItemCardStyled, CastImg } from './CastItemCard.styled';

export const CastItemCard = ({ name, character, photo }) => {
  return (
    <CastItemCardStyled>
      {photo ? (
        <CastImg src={`https://image.tmdb.org/t/p/w300${photo}`} alt="" />
      ) : (
        <p>No photo</p>
      )}
      <p>{name}</p>
      <p>{character}</p>
    </CastItemCardStyled>
  );
};

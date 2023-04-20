import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieByIdCast } from 'components/API/API';
import { CastItemCard } from './CastItemCard';
import { CastList } from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    getMovieByIdCast(moviesId).then(resp => setActors(resp));
  }, [moviesId]);

  return (
    <CastList>
      {actors.length > 0
        ? actors.map(({ character, name, profile_path }) => (
            <CastItemCard
              key={name}
              character={character}
              name={name}
              photo={profile_path}
            />
          ))
        : 'Oooops, there is no information about cast'}
    </CastList>
  );
};

export default Cast;

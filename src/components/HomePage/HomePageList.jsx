import { CardLink } from './HomePageList.styled';
import {
  HomePageMoviesList,
  HomePageMoviesItem,
  HomePageMoviesItemText,
} from './HomePageList.styled';
import PropTypes from 'prop-types';

export const HomePageList = ({ moviesList }) => {
  return (
    <HomePageMoviesList>
      {moviesList.map(({ id, title, poster_path, release_date }) => (
        <HomePageMoviesItem key={id}>
          <CardLink to={`/movies/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt=""
              max-width={'100px'}
            />
            <HomePageMoviesItemText>
              {title + ' (' + new Date(release_date).getFullYear() + ')'}
            </HomePageMoviesItemText>
          </CardLink>
        </HomePageMoviesItem>
      ))}
    </HomePageMoviesList>
  );
};

HomePageList.propTypes = {
  moviesList: PropTypes.array.isRequired,
};

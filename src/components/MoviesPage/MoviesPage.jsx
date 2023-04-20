import { useEffect, useState } from 'react';
import { getMovieBySearch } from 'components/API/API';
import {
  MoviesSection,
  SearchForm,
  Input,
  Button,
  MoviesList,
  MovieImg,
  MoviesListItem,
  MoviesLink,
  MovieText,
  NoPhoto,
} from './MoviesPage.styled';
import { toast } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';
import { useLocation, useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('query');

  const location = useLocation();

  useEffect(() => {
    if (query !== null) {
      setIsLoading(true);
      getMovieBySearch(query)
        .then(resp => {
          setIsLoading(false);
          if (resp.length === 0)
            throw new Error("Oooops, we don't have such movies for you.");
          setMovies(resp);
        })
        .catch(({ message }) => toast.error(message));
    }
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchValue.toLowerCase() });
  };

  const onSearch = e => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  return (
    <MoviesSection>
      <SearchForm onSubmit={onSubmit}>
        <label>
          <Input
            placeholder="Search movies..."
            onChange={onSearch}
            value={searchValue}
          />
        </label>
        <Button type="submit">Search</Button>
      </SearchForm>
      {isLoading && <ClipLoader />}
      <MoviesList>
        {movies &&
          movies.map(({ id, title, poster_path, release_date }) => (
            <MoviesList key={id}>
              <MoviesListItem>
                <MoviesLink to={`/movies/${id}`} state={{ from: location }}>
                  {poster_path ? (
                    <MovieImg
                      src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                      alt=""
                    />
                  ) : (
                    <NoPhoto>No photo</NoPhoto>
                  )}
                  <MovieText>
                    {title + ' (' + new Date(release_date).getFullYear() + ')'}
                  </MovieText>
                </MoviesLink>
              </MoviesListItem>
            </MoviesList>
          ))}
      </MoviesList>
    </MoviesSection>
  );
};

export default MoviesPage;

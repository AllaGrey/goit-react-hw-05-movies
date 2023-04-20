import { useEffect, useRef, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieById } from 'components/API/API';
import {
  MovieDetailsSection,
  MainMovieInfo,
  Title,
  List,
  AddLink,
  MovieImg,
  MovieTextInfo,
  BackLink,
} from './MovieDetails.styled';
import { toast } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { moviesId } = useParams();
  const { state } = useLocation();
  const backLink = useRef(state === null ? '/' : state.from);

  useEffect(() => {
    setIsLoading(true);
    getMovieById(moviesId)
      .then(resp => {
        setIsLoading(false);
        if (resp.length === 0)
          throw new Error('Oooops, something went wrong...');
        setMovie(resp);
      })
      .catch(({ message }) => toast.error(message));
  }, [moviesId]);

  const { title, vote_average, poster_path, overview, genres, release_date } =
    movie;

  return (
    <MovieDetailsSection>
      <BackLink to={backLink.current}>Go back</BackLink>
      {isLoading && (
        <div>
          <ClipLoader />
        </div>
      )}
      <MainMovieInfo>
        <MovieImg
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt=""
        />
        <MovieTextInfo>
          <Title>{title + ' (' + release_date + ')'}</Title>
          <p>User Score: {Math.ceil(vote_average * 10)}%</p>
          <h2>Owerview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <List>
            {genres && genres.map(({ name }) => <li key={name}>{name}</li>)}
          </List>
        </MovieTextInfo>
      </MainMovieInfo>
      <h3>Additional information</h3>
      <List>
        <li>
          <AddLink to={`/movies/${moviesId}/cast`}>Cast</AddLink>
        </li>
        <li>
          <AddLink to={`/movies/${moviesId}/reviews`}>Reviews</AddLink>
        </li>
      </List>
      <Outlet />
    </MovieDetailsSection>
  );
};

export default MovieDetailsPage;

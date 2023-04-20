import { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import { getMovie } from '../API/API';
import { HomePageList } from './HomePageList';

const HomePage = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isLoading) setIsLoading(true);
    getMovie()
      .then(data => {
        setMoviesList(data);
        setIsLoading(false);
      })
      .catch(err => setError(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const title = 'Trending today'.toUpperCase();
  return (
    <div>
      <h1>{title}</h1>
      {isLoading ? <ClipLoader /> : <HomePageList moviesList={moviesList} />}
      {error && <p>{error}</p>}
    </div>
  );
};

export default HomePage;

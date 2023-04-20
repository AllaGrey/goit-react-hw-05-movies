import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Container } from './App.styled';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const HomePage = lazy(() => import('./HomePage/HomePage'));
  const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage'));
  const MovieDetailsPage = lazy(() =>
    import('./MovieDetails/MovieDetails/MovieDetails')
  );
  const Cast = lazy(() => import('./MovieDetails/Cast/Cast'));
  const Reviews = lazy(() => import('./MovieDetails/Reviews/Reviews'));

  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:moviesId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <Toaster />
    </Container>
  );
};

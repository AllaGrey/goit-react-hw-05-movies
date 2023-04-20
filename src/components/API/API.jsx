import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '4c160d44a5a09b17954e70f9ad157f70';
const trending = 'trending/movie/day?';

export async function getMovie() {
  const resp = await axios(`${BASE_URL}${trending}api_key=${API_KEY}`);
  const data = resp.data.results;
  return data;
}

export async function getMovieBySearch(search) {
  const resp = await axios(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${search}`
  );
  const data = resp.data.results;
  return data;
}

export async function getMovieById(id) {
  const resp = await axios(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return resp.data;
}

export async function getMovieByIdCast(id) {
  const resp = await axios(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`);
  return resp.data.cast;
}

export async function getMovieByIdReview(id) {
  const resp = await axios(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`);
  return resp.data.results;
}

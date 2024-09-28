import axios from 'axios';

const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2FkZWVlZjMzN2Q1MGI0ZGU0M2FiYzEwNTY2YTZlZSIsIm5iZiI6MTcyNzUzNzEyOS4yMDE4NTEsInN1YiI6IjYxNjdmMDY1YTgwMjM2MDAyYjI2OWRkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3x28ETtnMWR2YbIp36MJN7-Kni-1SB_phmxXIkXYkBk';
const BASE_URL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

export const getMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}trending/movie/day?language=en-US`, options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const movieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}?language=en-US`, options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const movieCredits = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/credits?language=en-US`, options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const movieReviews = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/reviews?language=en-US&page=1`, options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

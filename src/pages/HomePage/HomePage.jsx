import MovieList from '../../components/MovieList/MovieList.jsx';
import { getMovies } from '../../api.js';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const data = await getMovies();
      if (data && data.results) {
        setMovies(data.results);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList list={movies} />
    </div>
  );
};

export default HomePage;

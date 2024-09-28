import MovieList from '../../components/MovieList/MovieList.jsx';
import { searchMovies } from '../../api.js';
import { useEffect, useState } from 'react';
import styles from './MoviesPage.module.css';
import { useSearchParams } from 'react-router-dom';


const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryFromURL = searchParams.get('query') || '';
  const [query, setQuery] = useState(queryFromURL);

  useEffect(() => {
    if (queryFromURL) {
      const fetchMovies = async () => {
        const data = await searchMovies(queryFromURL);
        if (data && data.results) {
          setMovies(data.results);
        }
      };

      fetchMovies();
    }
  }, [queryFromURL]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ query });
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>

      {movies.length > 0 && <MovieList list={movies}></MovieList>}
    </div>
  );
};

export default MoviesPage;

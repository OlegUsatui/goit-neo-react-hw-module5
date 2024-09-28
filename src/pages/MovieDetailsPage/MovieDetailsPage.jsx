import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { movieDetails } from '../../api.js';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await movieDetails(movieId);
      if (data) {
        setMovie(data);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.movieDetailsPage}>
      {movie ? (
        <>
          <button onClick={handleGoBack} className={styles.goBackBtn}>← Go back</button>
          <div className={styles.movieDetailsContainer}>
            <img
              className={styles.moviePoster}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className={styles.movieInfo}>
              <h1>{movie.title} ({new Date(movie.release_date).getFullYear()})</h1>
              <p><strong>User Score:</strong> {Math.round(movie.vote_average * 10)}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres.map((genre) => genre.name).join(' ')}</p>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;

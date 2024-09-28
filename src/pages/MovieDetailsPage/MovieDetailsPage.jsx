import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { movieDetails } from '../../api.js';
import styles from './MovieDetailsPage.module.css';
import GoBackButton from '../../components/GoBackButton/GoBackButton.jsx';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const prevLocation = useRef(location.state ?? '/');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await movieDetails(movieId);
      if (data) {
        setMovie(data);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className={styles.movieDetailsPage}>
      {movie ? (
        <>
          <GoBackButton to={prevLocation.current}/>
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
          <div className={styles.additionalInfoSection}>
            <h2>Additional information</h2>
            <ul className={styles.infoList}>
              <li>
                <Link to="cast" className={styles.infoLink}>Cast</Link>
              </li>
              <li>
                <Link to="reviews" className={styles.infoLink}>Reviews</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;

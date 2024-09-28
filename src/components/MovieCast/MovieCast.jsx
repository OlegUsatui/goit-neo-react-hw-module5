import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { movieCredits } from '../../api.js';
import styles from './MovieCast.module.css';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      const data = await movieCredits(movieId);
      if (data && data.cast) {
        setCast(data.cast);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div className={styles.castList}>
      {cast.length > 0 ? (
        cast.map((actor) => (
          <div key={actor.id} className={styles.castItem}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              className={styles.actorImage}
            />
            <div className={styles.actorInfo}>
              <p><strong>{actor.name}</strong></p>
              <p>Character: {actor.character}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No cast information available.</p>
      )}
    </div>
  );
};

export default MovieCast;

import styles from './MovieReviews.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviews } from '../../api.js';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await movieReviews(movieId);
      if (data && data.results) {
        setReviews(data.results);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div className={styles.reviewsSection}>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id} className={styles.reviewItem}>
            <p><strong>Author: {review.author}</strong></p>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default MovieReviews;

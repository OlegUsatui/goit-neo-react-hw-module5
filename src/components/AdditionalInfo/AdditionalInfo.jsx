import { Link } from 'react-router-dom';
import styles from './AdditionalInfo.module.css'; // Подключаем модульные стили

const AdditionalInfo = () => {
  return (
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
  );
};

export default AdditionalInfo;

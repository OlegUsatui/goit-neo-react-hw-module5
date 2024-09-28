import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ list }) => {
  const location = useLocation();

  return (
    <ul>
      {
        list.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`} state={location}>{item.title}</Link>
            </li>
          )
        })
      }
    </ul>
  );
};

export default MovieList;

import { Link } from 'react-router-dom';

const MovieList = ({ list }) => {
  return (
    <ul>
      {

        list.map(item => {
          return (
            <li key={item.id}>
              <Link to={`movies/${item.id}`}>{item.title}</Link>
            </li>
          )
        })
      }
    </ul>

  );
};

export default MovieList;

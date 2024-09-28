import { Link } from 'react-router-dom';

const GoBackButton = ({ to }) => {
  return (
    <div>
        <Link to={to}>← Go back</Link>
    </div>
  );
};

export default GoBackButton;

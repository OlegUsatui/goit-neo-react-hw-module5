import { Link, useLocation} from 'react-router-dom';

const GoBackButton = () => {
  const location = useLocation();
  const backLinkHref = location.state ?? "/";

  return (
    <div>
      <Link to={backLinkHref}>← Go back</Link>
    </div>
  );
};

export default GoBackButton;

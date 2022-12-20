import { NavLink } from 'react-router-dom';

function ErrorPage() {
  return (
    <div>
      <h1>404</h1>
      <NavLink to="/"> Go Main Page! </NavLink>
    </div>
  );
}

export default ErrorPage;
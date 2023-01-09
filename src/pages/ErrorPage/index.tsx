import { NavLink } from "react-router-dom";
import Links from "../../constants/Links";

function ErrorPage() {
  return (
    <div>
      <h1>404</h1>
      <NavLink to={Links.MAIN_PAGE}> Go Main Page! </NavLink>
    </div>
  );
}

export default ErrorPage;

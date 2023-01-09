import { NavLink } from "react-router-dom";
import Links from "../../constants/Links";

import "./style.scss";

function ErrorPage() {
  return (
    <div className="error-page">
      <h1>{"PAGE NOT FOUND (404)"}</h1>
      <NavLink to={Links.MAIN_PAGE}> Go Main Page! </NavLink>
    </div>
  );
}

export default ErrorPage;

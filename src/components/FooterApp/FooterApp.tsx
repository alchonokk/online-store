import OurTeam from "../../enumerations/Team";
import MemberTag from "./MemberTag";
import './style.css';

function FooterApp() {
  return (
    <>
      <footer>
        <div className="git-users">{OurTeam.map(MemberTag)}</div>
        <p className="created-data"> © 2022 </p>
        <a href="https://rs.school/js/" target="_blank" className="rs-logo"></a>
      </footer>
    </>
  );
}

export default FooterApp;
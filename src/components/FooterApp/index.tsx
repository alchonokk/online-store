import Links from "../../constants/Links";
import MemberTag from "./MemberTag";
import "./style.scss";

const FooterApp = () => {
  return (
    <>
      <footer>
        <div className="git-users">
          <MemberTag gitHubProfile={Links.ZHUK_GITHUB_URL} name="Ivan" />
          <MemberTag gitHubProfile={Links.ALCHONOKK_GITHUB_URL} name="Halina" />
        </div>
        <p className="created-data"> © 2022 </p>
        <a
          href="https://rs.school/js/"
          target="_blank"
          rel="noreferrer"
          className="rs-logo"
        >
          RSSchool
        </a>
      </footer>
    </>
  );
};

export default FooterApp;

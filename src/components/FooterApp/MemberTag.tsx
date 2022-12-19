import { TeamMember } from "../../enumerations/Team";
import { getMemberGitHubLink } from "../../enumerations/Team";

function MemberTag({ gitHubProfile, name }: TeamMember) {
  return (
      <a className="git-link" key={gitHubProfile} href={getMemberGitHubLink(gitHubProfile)} target="_blank">
        <span className="git-logo"></span>
        <span className="user-name">{name}</span>
      </a>
  );
}

export default MemberTag;
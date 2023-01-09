interface TeamMember {
  gitHubProfile: string;
  name: string;
}

const MemberTag = ({ gitHubProfile, name }: TeamMember) => {
  return (
    <a
      className="git-link"
      key={gitHubProfile}
      href={gitHubProfile}
      target="_blank"
      rel="noreferrer"
    >
      <span className="git-logo"></span>
      <span className="user-name">{name}</span>
    </a>
  );
};

export default MemberTag;

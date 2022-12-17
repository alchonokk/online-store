export interface TeamMember {
  name: string;
  gitHubProfile: string;
}

export function getMemberGitHubLink(gitHubProfile: string) {
  return 'https://github.com/' + gitHubProfile;
}

const OurTeam: TeamMember[] = [
  {
    name: 'Ivan',
    gitHubProfile: 'Zhuk1305'
  },
  {
    name: 'Halina',
    gitHubProfile: 'alchonokk'
  }
];

export default OurTeam;
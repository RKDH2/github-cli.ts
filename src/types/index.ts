interface RepositoryData {
  type: "repo";
  name: string;
  owner: string;
  profile_url: string;
  repo_url: string;
  visibility: string;
  default_branch: string;
  license: string;
  stars: number;
  forks: number;
  open_issues: number;
  language: string;
  updated_at: string;
}

interface UserData {
  type: "user";
  login: string;
  name: string;
  profile_url: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

type OutputData = RepositoryData | UserData;

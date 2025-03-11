import { httpClient } from "../api/http";
import { ErrorObject, timeout } from "../errors/timeout";

export async function getRepoData(repo: string): Promise<RepositoryData> {
  const baseUrl = `https://api.github.com/repos/${repo}`;

  try {
    const response = await httpClient.fetch(baseUrl);

    const {
      name,
      owner,
      html_url,
      visibility,
      default_branch,
      license,
      stargazers_count,
      forks,
      open_issues,
      language,
      updated_at,
    } = response;
    return {
      type: "repo",
      name,
      owner: owner.login,
      profile_url: owner.html_url,
      repo_url: html_url,
      visibility,
      default_branch,
      license: license?.name || "NO LICENSE",
      stars: stargazers_count,
      forks,
      open_issues,
      language,
      updated_at,
    };
  } catch (error) {
    timeout(error as ErrorObject);
    throw new Error("GitHub API Error: Failed to fetch repo data");
  }
}

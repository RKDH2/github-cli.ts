import { httpClient } from '../api/http';
import { ErrorObject, timeout } from '../errors/timeout';
import { OutputData } from '../types';

export async function getUserData(username: string): Promise<OutputData> {
  const baseUrl = `https://api.github.com/users/${username}`;

  try {
    const response = await httpClient.fetch(baseUrl);

    const {
      login,
      name,
      html_url,
      company,
      blog,
      location,
      email,
      bio,
      public_repos,
      followers,
      following,
      created_at,
      updated_at,
    } = response;
    return {
      type: 'user',
      login,
      name,
      profile_url: html_url,
      company: company || 'NO COMPANY',
      blog: blog || 'NO BLOG',
      location,
      email: email || 'NO EMAIL',
      bio,
      public_repos,
      followers,
      following,
      created_at,
      updated_at,
    };
  } catch (error) {
    timeout(error as ErrorObject);
    throw new Error('GitHub API Error: Failed to fetch user data');
  }
}

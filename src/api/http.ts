import axios, { AxiosInstance } from 'axios';

export default class HttpClient {
  private readonly rest: AxiosInstance;
  private readonly baseUrl = 'https://api.github.com';

  constructor() {
    this.rest = axios.create({
      baseURL: this.baseUrl,
      timeout: 5000,
    });

    this.rest.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error(
          'GitHub API Error:',
          error.response?.data?.message || error.message,
        );
        throw new Error('GitHub API Error');
      },
    );
  }

  async fetch(endpoint: string) {
    const response = await this.rest.get(endpoint);
    return response.data;
  }
}

export const httpClient = new HttpClient();

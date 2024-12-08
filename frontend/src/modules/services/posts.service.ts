import axios, { AxiosInstance } from 'axios';
import { ROUTER_KEYS, URLs } from '../const/app-keys.const';
export interface IPosts {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

class PostService {
  private apiClient: AxiosInstance;

  constructor(baseURL: string) {
    this.apiClient = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.apiClient.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }

  public async getPosts(): Promise<IPosts[]> {
    try {
      const response = await this.apiClient.get(`/${ROUTER_KEYS.post}`);
      const posts = response.data as IPosts[];
      return posts;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  public async getPost(id: number): Promise<IPosts> {
    try {
      const response = await this.apiClient.get(`/${ROUTER_KEYS.post}/${id}`);
      const post = response.data as IPosts;
      return post;
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: unknown): never {
    if (axios.isAxiosError(error)) {
      console.error(
        'Error during request:',
        error.response?.data || error.message,
      );
    } else {
      console.error('Unexpected error:', error);
    }
    throw new Error('An error occurred while processing the request.');
  }
}

const postService = new PostService(URLs.backend);
export default postService;

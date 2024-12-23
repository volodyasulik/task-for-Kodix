import axios, { AxiosInstance } from 'axios';
import { KEYS_WORDS, ROUTER_KEYS, URLs } from '../const/app-keys.const';
type SignUpData = {
  password: string;
  email: string;
  lastName?: string;
  firstName?: string;
};

class AuthService {
  private apiClient: AxiosInstance;

  constructor(baseURL: string) {
    this.apiClient = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const token = this.getToken();
    if (token) {
      this.setAuthorizationHeader(token);
    }
  }

  public async SignIn(email: string, password: string): Promise<string> {
    try {
      const response = await this.apiClient.post(
        `/${ROUTER_KEYS.auth}/${ROUTER_KEYS.signIn}`,
        {
          email,
          password,
        },
      );
      const token = response.data as string;
      this.handleToken(token);
      return token;
    } catch (error) {
      this.handleError(error);
    }
  }

  public async SignUp(data: SignUpData): Promise<string> {
    try {
      const response = await this.apiClient.post(
        `/${ROUTER_KEYS.auth}/${ROUTER_KEYS.signUp}`,
        data,
      );
      const token = response.data as string;
      this.handleToken(token);
      return token;
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleToken(token: string): void {
    this.saveToken(token);
    this.setAuthorizationHeader(token);
  }

  private saveToken(token: string): void {
    localStorage.setItem(KEYS_WORDS.jwt, token);
  }

  getToken(): string | null {
    return localStorage.getItem(KEYS_WORDS.jwt);
  }

  logout(): void {
    localStorage.removeItem(KEYS_WORDS.jwt);
    this.clearAuthorizationHeader();
  }

  private setAuthorizationHeader(token: string): void {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  private clearAuthorizationHeader(): void {
    delete axios.defaults.headers.common['Authorization'];
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

const authService = new AuthService(URLs.backend);
export default authService;

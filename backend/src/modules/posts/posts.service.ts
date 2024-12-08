import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { IPosts } from './types/posts.types';

@Injectable()
export class PostsService {
  public async getPosts(page = 1) {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?_start=0&_limit=${
          page * 5
        }`,
      );
      return response.data as IPosts[];
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw new Error('Failed to fetch posts');
    }
  }

  public async getPost(id: number) {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments/${id}`,
      );
      return response.data as IPosts;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw new Error('Failed to fetch posts');
    }
  }
}

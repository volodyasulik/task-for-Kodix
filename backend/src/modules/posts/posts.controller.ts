import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { JwtAuthGuard } from '../jwt/jwt-auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  public async getPosts(page = 1) {
    const posts = await this.postsService.getPosts(page);
    return posts;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  public async getPost(@Param('id') id: string) {
    const posts = await this.postsService.getPost(Number(id));
    return posts;
  }
}

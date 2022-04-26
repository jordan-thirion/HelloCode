import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Article } from './article.entity';
import { Category } from './category/category.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/newArticle')
  async createNewArticle(title: string, text: string, category: Category): Promise<Article> {
    return this.appService.createArticle(title, text, category);
  }

  @Get()
  async getAllArticle(): Promise<Article[]> {
    return this.appService.getAllArticle();
  }

  @Get('/article/:id')
  async getArticleById(@Param() params): Promise<Article> {
    return this.appService.getArticleById(params.id);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}

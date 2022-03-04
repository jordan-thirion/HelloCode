import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity';
import { Category } from './category/category.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>
  ) {}

  getAllArticle(): Promise<Article[]> {
    return this.articleRepository.find({relations: ['category']});
  }

  getArticleById(id: number): Promise<Article> {
    try{
      const article =  this.articleRepository.findOneOrFail(id);
      return article
    }
    catch(err) {
      throw err;
    }
  }

  createArticle(title: string, text: string, category: Category): Promise<Article>{
    const dateCreated = new Date();
    const newArticle = this.articleRepository.create({ title, text, dateCreated, category})
    return this.articleRepository.save(newArticle);
  }

  async updateArticle(id: number, title: string, text: string, category: Category): Promise<Article>{
    const article = await this.getArticleById(id);

    article.title = title;
    article.category = category;
    article.text = text;

    return this.articleRepository.save(article);
  }

  async deleteArticle(id: number): Promise<Article> {
    const article = await this.getArticleById(id);

    return this.articleRepository.remove(article);
  }

  getHello(): string {
    return 'Hello World!';
  }
}

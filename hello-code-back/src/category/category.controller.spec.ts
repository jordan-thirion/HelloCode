import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { Category } from './category.entity';
import config from '../../ormconfig';
import { CategoryModule } from './category.module';
import { CategoryService } from './category.service';
import { Repository } from 'typeorm';

describe('CategoryController', () => {
  let categoryController: CategoryController;
  let categoryService: CategoryService;
  let categoryRepository: Repository<Category>;

  beforeEach(async () => {
    categoryRepository = new Repository();
    categoryService = new CategoryService(categoryRepository);
    categoryController = new CategoryController(categoryService);  
  });

  it('should be defined', () => {
    expect(categoryController).toBeDefined();
  });

  it('should get the first category', async () => {
    const result = {id:1, name:"PHP", articles: []};
    jest.spyOn(categoryService, "getCategoryById").mockImplementation(() => new Promise((resolve, reject) => resolve(result)));
    expect(await categoryController.getCategoryById("1")).toBe(result);
  })
});

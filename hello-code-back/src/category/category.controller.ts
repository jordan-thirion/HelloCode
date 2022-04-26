import { Controller, Get, Param } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAllCategory(): Promise<Category[]> {
    return this.categoryService.getAllCategory();
  }

  @Get('/newCategory')
  async createCategory(): Promise<Category> {
    return this.categoryService.createCategory("MongoDB");
  }

  @Get('/:id')
  async getCategoryById(@Param('id') id : string): Promise<Category> {
    return this.categoryService.getCategoryById(+id);
  }
}

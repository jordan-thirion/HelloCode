import { Test, TestingModule } from '@nestjs/testing';
import { Category } from './category.entity';
import config from '../../ormconfig';
import { CategoryModule } from './category.module';
import { CategoryService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([Category])],
      controllers: [CategoryController],
      providers: [CategoryService, CategoryModule],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

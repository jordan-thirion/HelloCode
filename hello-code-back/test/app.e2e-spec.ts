import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { CategoryModule } from './../src/category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './../src/category/category.entity';
import { CategoryService } from './../src/category/category.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let categoryService = {getAllCategory: () => [{"id":1,"name":"PHP","articles":[{"id":1,"title":"Article du CRUD amélioré","text":"Un nouvel article encore mieux avec un lien","dateCreated":"2022-03-02T12:22:02.000Z"}]},{"id":2,"name":"Javascript","articles":[{"id":2,"title":"Article du CRUD amélioré","text":"Un nouvel article encore mieux avec un lien","dateCreated":"2022-03-02T12:28:42.000Z"},{"id":4,"title":"Article du CRUD amélioré","text":"Un nouvel article encore mieux avec un lien sans name","dateCreated":"2022-03-02T12:31:16.000Z"}]},{"id":4,"name":"MongoDB","articles":[{"id":3,"title":"Article du CRUD amélioré sans name","text":"Un nouvel article encore mieux avec un lien","dateCreated":"2022-03-02T12:29:41.000Z"}]},{"id":3,"name":"Python","articles":[{"id":5,"title":"Article créé","text":"Un article de ouf","dateCreated":"2022-03-04T13:23:32.000Z"}]}]};

beforeEach(async () => {
  const ref: TestingModule = await Test.createTestingModule({
    imports: [CategoryModule, TypeOrmModule.forFeature([Category])],
    providers: [CategoryService]
  })
  .overrideProvider(CategoryService)
  .useValue(categoryService)
  .compile();

  app = ref.createNestApplication();
  await app.init();
});

it('should return statusCode 200', () => {
  return request(app.getHttpServer()).get('/category').expect(200);
})
});

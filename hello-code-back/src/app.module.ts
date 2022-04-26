import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Article } from './article.entity';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([Article]), CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

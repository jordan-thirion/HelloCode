import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category) private categoryRepository: Repository<Category>
    ) {}
    
    getAllCategory(): Promise<Category[]> {
        return this.categoryRepository.find({relations: ['articles']});
    }

    createCategory(name: string): Promise<Category> {
        const newCategory = this.categoryRepository.create({name})
        return this.categoryRepository.save(newCategory);
    }

    getCategoryById(id){
        return this.categoryRepository.findOne(id);
    }
}

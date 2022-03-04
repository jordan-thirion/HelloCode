import { Article } from "src/article.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(type => Article, article => article.category)
    articles: Article[]
}
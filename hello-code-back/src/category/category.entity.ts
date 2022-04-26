import { Article } from "../article.entity";
import { Column, Entity, EntityRepository, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(type => Article, article => article.category)
    articles: Article[]
}
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category/category.entity";

@Entity()
export class Article{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    text: string

    @Column()
    dateCreated: Date

    @ManyToOne(type => Category, category => category.articles)
    category: Category
}
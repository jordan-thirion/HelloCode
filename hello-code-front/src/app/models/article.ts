import { Category } from "./category";

export interface Article {
    id: number,
    title: string,
    text: string,
    dateCreated: Date | string,
    category: Category 
}
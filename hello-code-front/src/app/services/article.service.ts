import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private httpClient: HttpClient) { }

  getAllArticles(){
    let articles =  this.httpClient.get("http://localhost:3000/");
    return articles;
  }

  getArticleById(id: number){
    let article =  this.httpClient.get("http://localhost:3000/article/" + id);
    return article;
  }

  createNewArticle(title: string, texte: string, id: number){
    let category: Category = {id: id, name: "", articles: []}
    this.httpClient.get("http://localhost:3000/newArticle/" + title + texte + category)
  }

}

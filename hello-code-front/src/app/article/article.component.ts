import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  listArticle: Article[] = [];
  href: number = 0;
  article: Article = {
    id: 0,
    title: '',
    text: '',
    dateCreated: new Date,
    category: {id: 0, name: "", articles: []}
  };

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {
    this.reload();
    this.articleService.getAllArticles().subscribe((data: any) => this.listArticle = data);
  }

  reload(){
    this.href = parseInt(this.router.url.split('/')[2]);
    this.articleService.getArticleById(this.href).subscribe((data: any) => {console.log(data); this.article = data; this.cleanDate(this.article)});
  }

  cleanDate(article: Article){
    article.dateCreated = article.dateCreated.toString().split('T')[0];
  }

}

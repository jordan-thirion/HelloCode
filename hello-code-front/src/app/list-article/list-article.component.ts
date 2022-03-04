import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  listArticle: Article[] = [];
  href: string = "";

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe((data: any) => this.listArticle = data);
  }

  drop(event: CdkDragDrop<Article[]>) {
    moveItemInArray(this.listArticle, event.previousIndex, event.currentIndex);
  }

}

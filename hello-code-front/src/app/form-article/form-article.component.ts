import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../models/category';
import { ArticleService } from '../services/article.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-form-article',
  templateUrl: './form-article.component.html',
  styleUrls: ['./form-article.component.css']
})
export class FormArticleComponent implements OnInit {
  newArticleForm: FormGroup;
  categories: Category[] = [];

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService, private articleService: ArticleService) {
    this.newArticleForm = formBuilder.group({
      title: formBuilder.control('initial value', Validators.required)
    });
   }

   ngOnInit() {
    this.categoryService.getAllCategories().subscribe((data: any) => this.categories = data)
    this.newArticleForm  =  this.formBuilder.group({
        title: '',
        text: '',
        categoryId: 0
    });
  }

  get formControls() { return this.newArticleForm.controls; }

  createArticle(){
    this.articleService.createNewArticle(this.newArticleForm.value.title, this.newArticleForm.value.text, this.newArticleForm.value.categoryId )
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAllCategories(){
    let categories = this.httpClient.get("http://localhost:3000/category/");
    return categories;
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { FormArticleComponent } from './form-article/form-article.component';
import { AuthGuard } from './helpers/auth.guard';
import { ListArticleComponent } from './list-article/list-article.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'login'},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent, canActivate: [AuthGuard]},
  {path: 'listArticle', component: ListArticleComponent, canActivate: [AuthGuard]},
  {path: 'article/:id', component: ArticleComponent, canActivate: [AuthGuard]},
  {path: 'formArticle', component: FormArticleComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

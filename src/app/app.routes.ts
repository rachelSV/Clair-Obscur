import { Routes } from '@angular/router';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'articles/:id', component: ArticleDetailComponent },
    { path: '**', redirectTo: '' }
];

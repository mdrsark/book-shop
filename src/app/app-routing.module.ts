import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { BookListComponent } from './books/components/book-list/book-list.component';
import { BookAddComponent } from './books/components/book-add/book-add.component';
import { BookDetailComponent } from './books/components/book-detail/book-detail.component';


const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'create', component: BookAddComponent },
  { path: 'details/:id', component: BookDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

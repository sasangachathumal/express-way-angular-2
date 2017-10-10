import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { IndexComponent } from './index/index.component';
import { FriendsComponent } from './friends/friends.component';

const appRoutes: Routes = [
  {
    path: '**', // routing path
    component: IndexComponent
  },
  {
    path: 'search',
    component: SearchResultComponent
  },
  {
    path: 'friends',
    component: FriendsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    IndexComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

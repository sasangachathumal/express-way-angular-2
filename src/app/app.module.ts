import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { LandingComponent } from './landing/landing.component';

const appRoutes: Routes = [
  {
    path: 'search',
    component: SearchResultComponent
  },
  {
    path: '**',
    component: LandingComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    LandingComponent
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
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

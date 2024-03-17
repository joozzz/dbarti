import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAccComponent } from './components/page-acc/page-acc.component';
import { FavoritesComponent } from './components/favorites/favorites.component';


@NgModule({
  declarations: [
    AppComponent,
    PageAccComponent,
    FavoritesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

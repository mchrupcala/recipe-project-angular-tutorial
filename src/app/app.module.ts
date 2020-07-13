import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeListComponent } from './dashboard/recipe/recipe-list/recipe-list.component';
import { GroceryListComponent } from './dashboard/shopping/grocery-list/grocery-list.component';
import { GroceryEditComponent } from './dashboard/shopping/grocery-edit/grocery-edit.component';
import { RecipeDetailComponent } from './dashboard/recipe/recipe-detail/recipe-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RecipeListComponent,
    GroceryListComponent,
    GroceryEditComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
//    ,MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

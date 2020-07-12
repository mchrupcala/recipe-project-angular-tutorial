import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeListComponent } from './dashboard/recipe/recipe-list/recipe-list.component';
import { RecipeEditComponent } from './dashboard/recipe/recipe-edit/recipe-edit.component';
import { GroceryListComponent } from './dashboard/shopping/grocery-list/grocery-list.component';
import { RecipeItemComponent } from './dashboard/shopping/recipe-item/recipe-item.component';
import { GroceryEditComponent } from './dashboard/shopping/grocery-edit/grocery-edit.component';
import { RecipeDetailComponent } from './dashboard/recipe/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RecipeListComponent,
    RecipeEditComponent,
    GroceryListComponent,
    RecipeItemComponent,
    GroceryEditComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

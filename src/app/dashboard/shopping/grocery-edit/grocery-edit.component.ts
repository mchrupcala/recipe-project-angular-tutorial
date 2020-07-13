import { Component, OnInit } from '@angular/core';
import { groceryItem } from '../groceryItem';
import { GroceryListComponent } from '../grocery-list/grocery-list.component';

@Component({
  selector: 'app-grocery-edit',
  templateUrl: './grocery-edit.component.html',
  styleUrls: ['./grocery-edit.component.css']
})


export class GroceryEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newGroceryItem = '';
  newItemAmount = 0;
  
  groceryList = [];
  randvar = 'Hi there!';

  onNameChange(event: any) {
    this.newGroceryItem = event.target.value;
  }

  onAmountChange(event: any) {
    this.newItemAmount = event.target.value;
  }

  addItem() {
    const newItem: groceryItem = {
      name: this.newGroceryItem,
      amount: this.newItemAmount
    }
    this.groceryList.push(newItem);
    this.newGroceryItem = '';
    this.newItemAmount = 0;
  }
}
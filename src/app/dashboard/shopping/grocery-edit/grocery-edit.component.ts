import { Component, OnInit } from '@angular/core';

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
  

  onNameChange(event: any) {
    this.newGroceryItem = event.target.value;
  }

  onAmountChange(event: any) {
    this.newItemAmount = event.target.value;
  }

  addItem() {
    this.groceryList.push({
      name: this.newGroceryItem,
      amount: this.newItemAmount
    });
    this.newGroceryItem = '';
    this.newItemAmount = 0;
  }
}
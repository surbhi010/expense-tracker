import { Component, OnInit, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { Expense } from '../../shared/expense.model';
import { AccountService } from '../../shared/account.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit, OnChanges {
  expenses: Expense[];
  filteredExpenses: Expense[] = [];
  selectedExpenseType;
  constructor(private accountService: AccountService) { }
  ExpenseTypes;
  // @ViewChild('selectedExpenseType') selectedExpenseType: ElementRef;
  ngOnInit() {
    this.expenses = this.accountService.getExpenses();
    this.accountService.expenseChanged.subscribe(
      (expense: Expense[]) => {
        this.expenses = expense;
      }
    );
    this.ExpenseTypes = this.accountService.getCategory();

  }
  // filter(event) {
  //   this.filteredExpenses = this.expenses.filter(element => {
  //     return event.target.value === element.category;
  //   });
  //   console.log(this.selectedExpenseType);
  // }
  ngOnChanges() {
  }
}

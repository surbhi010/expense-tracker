import { Component, OnInit } from '@angular/core';
import { Expense } from '../../shared/expense.model';
import { AccountService } from '../../shared/account.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[];
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.expenses = this.accountService.getExpenses();
    this.accountService.expenseChanged.subscribe(
      (expense: Expense[]) => {
        this.expenses = expense;
      }
    );
  }

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AccountService } from '../../shared/account.service';
import { Expense } from '../../shared/expense.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css']
})
export class ExpenseEditComponent implements OnInit {
  ExpenseAccountNames;
  ExpenseTypes;
  expenses: Expense[];
  @ViewChild('selectedExpenseName') accountInputRef: ElementRef;
  @ViewChild('ExpenseName') nameInputRef: ElementRef;
  @ViewChild('AmountEntered') amountInputRef: ElementRef;
  @ViewChild('selectedExpenseType') selectedExpenseType: ElementRef;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.ExpenseAccountNames = this.accountService.getAccountNames();
    this.ExpenseTypes = this.accountService.getCategory();
    console.log(this.ExpenseTypes);
  }
  onExpense()  {
    const newExpense = new Expense(this.accountInputRef.nativeElement.value,
      this.nameInputRef.nativeElement.value,
      this.selectedExpenseType.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.accountService.addExpense(newExpense);
    this.expenses = this.accountService.getExpenses();
    this.accountService.storeExpense(this.expenses)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.accountService.getExpenseBackEnd()
    .subscribe(
          (response: Response) => {
              const data = response.json;
              console.log(data);
          }
      );
      }

}

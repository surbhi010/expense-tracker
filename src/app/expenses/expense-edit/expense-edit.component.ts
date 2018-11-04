import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AccountService } from '../../shared/account.service';
import { Expense } from '../../shared/expense.model';

@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css']
})
export class ExpenseEditComponent implements OnInit {
  ExpenseAccountNames;
  @ViewChild('selectedExpenseName') accountInputRef: ElementRef;
  @ViewChild('ExpenseName') nameInputRef: ElementRef;
  @ViewChild('AmountEntered') amountInputRef: ElementRef;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.ExpenseAccountNames = this.accountService.getAccountNames();
  }
  onExpense()  {
    const newExpense = new Expense(this.accountInputRef.nativeElement.value,
      this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.accountService.addExpense(newExpense);
  }
}

import { Component, OnInit, Input, OnChanges, Directive, SimpleChange } from '@angular/core';
import { AccountService } from '../../shared/account.service';
import { Deposit } from '../../shared/deposit.model';
import { Expense } from '../../shared/expense.model';
import { Account } from '../../shared/account.model';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})

export class AccountDetailComponent implements OnInit, OnChanges {
  @Input() account: Account;
  @Input() accountDeposit: Deposit[];
  @Input() accountExpense: Expense[];
  deposits: Deposit[];
  expenses: Expense[];
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    // this.deposits = this.accountService.getDeposits();
    // this.accountService.depositChanged.subscribe(
    //   (deposit: Deposit[]) => {
    //     this.deposits = deposit;
    //   }
    // );
    // this.expenses = this.accountService.getExpenses();
    // this.accountService.expenseChanged.subscribe(
    //   (expense: Expense[]) => {
    //     this.expenses = expense;
    //   }
    // );
  }
  ngOnChanges() {
      console.log(1, this.accountDeposit);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../../shared/account.model';
import { AccountService } from '../../../shared/account.service';
import { Deposit } from '../../../shared/deposit.model';
import { Expense } from '../../../shared/expense.model';
@Component({
  selector: 'app-account-items',
  templateUrl: './account-items.component.html',
  styleUrls: ['./account-items.component.css']
})
export class AccountItemsComponent implements OnInit {
@Input() account: Account;

  constructor(private accountService: AccountService) { }
  deposits: Deposit[];
  expenses: Expense[];
  ngOnInit() {
  }
  onAccountSelected() {
    console.log(this.account);
    this.deposits =  this.accountService.getDepositsForAccount(this.account);
    this.expenses = this.accountService.getExpenseForAccount(this.account);
    this.accountService.accountSelected.emit({
      account: this.account,
      deposits: this.deposits,
      expense: this.expenses
    });
  }
}

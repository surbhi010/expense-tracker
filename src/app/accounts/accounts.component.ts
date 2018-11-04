import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';
import { Deposit } from '../shared/deposit.model';
import { Expense } from '../shared/expense.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  selectedAccount: Account;
  selectedAccountDeposit: Deposit[];
  selectedAccountExpense: Expense[];
  balanceSum: number;
  constructor(private accountService: AccountService) {
    console.log(this.accountService);
  }

  ngOnInit() {
    this.accountService.accountSelected
      .subscribe(
        (obj) => {
          this.selectedAccount = obj.account;
          this.selectedAccountDeposit = obj.deposits;
          this.selectedAccountExpense = obj.expense;
        }
      );
      this.balanceSum = this.accountService.accountBalanceSum();
  }

}

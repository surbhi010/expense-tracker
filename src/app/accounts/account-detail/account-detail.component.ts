import { Component, OnInit, Input, OnChanges, Directive, SimpleChange } from '@angular/core';
import { AccountService } from '../../shared/account.service';
import { Deposit } from '../../shared/deposit.model';
import { Expense } from '../../shared/expense.model';
import { Account } from '../../shared/account.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})

export class AccountDetailComponent implements OnInit, OnChanges {
  account: Account;
  accountDeposit: Deposit[];
  accountExpense: Expense[];
  deposits: Deposit[];
  expenses: Expense[];
  nameAccount: string;
  abcd;

  constructor(private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute) {
      this.abcd = 90;
     }
  ngOnInit() {
    this.abcd = 100;
    console.log(this.nameAccount);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.nameAccount = params['name'];
           this.account = this.accountService.getAccountByName(this.nameAccount);
          // console.log('h1', this.account);
          this.accountDeposit = this.accountService.getDepositsForAccount(this.account);
          this.accountExpense = this.accountService.getExpenseForAccount(this.account);
        }
      );
  }
  ngOnChanges() {
    console.log(1, this.accountDeposit);
  }

}

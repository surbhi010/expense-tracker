import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/account.service';
import { Account } from '../../shared/account.model';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {
  account: Account[];
  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.account = this.accountService.getAccounts();
    this.accountService.accountsChanged.subscribe(
      (account: Account[]) => {
        this.account = account;
      }
    );
  }


}

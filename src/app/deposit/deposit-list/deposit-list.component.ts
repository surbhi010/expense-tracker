import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/account.service';
import { Deposit } from '../../shared/deposit.model';

@Component({
  selector: 'app-deposit-list',
  templateUrl: './deposit-list.component.html',
  styleUrls: ['./deposit-list.component.css']
})
export class DepositListComponent implements OnInit {
  deposits: Deposit[];
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.deposits = this.accountService.getDeposits();
    this.accountService.depositChanged.subscribe(
      (deposit: Deposit[]) => {
        this.deposits = deposit;
      }
    );
  }

}

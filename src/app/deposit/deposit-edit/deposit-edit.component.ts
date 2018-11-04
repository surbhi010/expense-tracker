import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AccountService } from '../../shared/account.service';
import { Deposit } from '../../shared/deposit.model';

@Component({
  selector: 'app-deposit-edit',
  templateUrl: './deposit-edit.component.html',
  styleUrls: ['./deposit-edit.component.css']
})
export class DepositEditComponent implements OnInit {
  depositAccountNames;
  @ViewChild('selectedAccountName') nameInputRef: ElementRef;
  @ViewChild('depositAmountEntered') amountInputRef: ElementRef;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.depositAccountNames = this.accountService.getAccountNames();
  }
  onDeposit()  {
    const amount = Number(this.amountInputRef.nativeElement.value);
    const newDeposit = new Deposit(this.nameInputRef.nativeElement.value, amount);
    this.accountService.addDeposit(newDeposit);
  }
}

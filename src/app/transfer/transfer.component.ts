import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AccountService } from '../shared/account.service';
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  accounts;
  @ViewChild('debitAccount') debitAccount: ElementRef;
  @ViewChild('creditAccount') creditAccount: ElementRef;
  @ViewChild('AmountEntered') amountInputRef: ElementRef;
  constructor( private accountService: AccountService) { }

  ngOnInit() {
    this.accounts = this.accountService.getAccountNames();
  }
  onTransfer()  {
    this.accountService.transferAmount(this.debitAccount.nativeElement.value, 
      this.creditAccount.nativeElement.value, this.amountInputRef.nativeElement.value);
    console.log(this.debitAccount.nativeElement.value, this.creditAccount.nativeElement.value, this.amountInputRef.nativeElement.value);
  }
}

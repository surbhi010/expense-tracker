import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Account } from '../../shared/account.model';
import { AccountService } from '../../shared/account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  @ViewChild('accountName')  nameInputRef: ElementRef;
  @ViewChild('accountCredit')  creditInputRef: ElementRef;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  addAccountDetail() {
    const newAccount = new Account(this.nameInputRef.nativeElement.value, this.creditInputRef.nativeElement.value);
    console.log(newAccount);
    this.accountService.addAccount(newAccount);
  }
}

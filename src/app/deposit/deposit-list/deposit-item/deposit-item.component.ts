import { Component, OnInit, Input } from '@angular/core';
import { Deposit } from '../../../shared/deposit.model';

@Component({
  selector: 'app-deposit-item',
  templateUrl: './deposit-item.component.html',
  styleUrls: ['./deposit-item.component.css']
})
export class DepositItemComponent implements OnInit {
  @Input() deposit: Deposit;
  constructor() { }

  ngOnInit() {
  }

}

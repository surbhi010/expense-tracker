import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { AccountsListComponent } from './accounts/accounts-list/accounts-list.component';
import { AccountItemsComponent } from './accounts/accounts-list/account-items/account-items.component';
import { AccountDetailComponent } from './accounts/account-detail/account-detail.component';
import { HeaderComponent } from './header/header.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AccountService } from './shared/account.service';
import { DepositComponent } from './deposit/deposit.component';
import { DepositEditComponent } from './deposit/deposit-edit/deposit-edit.component';
import { DepositListComponent } from './deposit/deposit-list/deposit-list.component';
import { DepositItemComponent } from './deposit/deposit-list/deposit-item/deposit-item.component';
import { ExpenseEditComponent } from './expenses/expense-edit/expense-edit.component';
import { ExpenseListComponent } from './expenses/expense-list/expense-list.component';
import { ExpenseItemComponent } from './expenses/expense-list/expense-item/expense-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    AddAccountComponent,
    AccountsListComponent,
    AccountItemsComponent,
    AccountDetailComponent,
    HeaderComponent,
    ExpensesComponent,
    DepositComponent,
    DepositEditComponent,
    DepositListComponent,
    DepositItemComponent,
    ExpenseEditComponent,
    ExpenseListComponent,
    ExpenseItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }

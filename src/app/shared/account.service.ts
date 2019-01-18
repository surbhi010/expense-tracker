import { Account } from './account.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Deposit } from './deposit.model';
import { Expense } from './expense.model';
import { Category } from './category.model';
import { Http } from '@angular/http';

@Injectable()

export class AccountService {
    constructor(private http: Http) { }
    accountSelected = new EventEmitter<{}>();
    accountsChanged = new EventEmitter<Account[]>();
    depositChanged = new EventEmitter<Deposit[]>();
    expenseChanged = new EventEmitter<Expense[]>();
    balance: number;
    currentbalance: number;
    accountNameSelected;
    accountName: {};
































    selectedAccount: Account;
    selectedAccountEmitter = new EventEmitter<Account>();

    public changeSelectedAccount(account: Account) {
        this.selectedAccount = account;
        this.selectedAccountEmitter.emit(this.selectedAccount);
    }













    private deposits: Deposit[] = [];
    private expenses: Expense[] = [];
    private accounts: Account[] = [
        new Account('Standard Chartered', 2000),
        new Account('SBI', 2000),
        new Account('Paytm', 400)
    ];
    private category: Category[] = [
        new Category('Food'),
        new Category('shopping'),
        new Category('rent'),
        new Category('personal'),
        new Category('others'),
    ];
    storeExpense(expense: Expense[]) {
        return this.http.put('https://expense-tracker-7bb91.firebaseio.com/data.json', expense);
    }
    getExpenseBackEnd() {
        return this.http.get('https://expense-tracker-7bb91.firebaseio.com/data.json');
            // .subscribe(
            //     (response: Response) => {
            //         const expense: Expense[] = response.json;

            //     }
            // );
    }
    getAccounts() {
        return this.accounts.slice();
    }
    getAccountByName(name) {
        return this.accounts.find(x => x.name === name);
    }
    getCategory() {
        const categorys = this.category.map(function (item) {
            return item.categoryName;
        });
        return categorys;
    }
    addAccount(account: Account) {
        // this.accounts.push(account);
        this.accounts.push(account);
        this.accountsChanged.emit(this.accounts.slice());
    }
    getAccountNames() {
        this.accountName = this.accounts.map(function (item) {
            return item.name;
        });
        return this.accountName;
    }
    accountBalanceSum() {
        const accountBalance = this.accounts.reduce(function (a, item) {
            return a + item.credit;
        }, 0);
        return accountBalance;
    }
    addDeposit(deposit: Deposit) {
        this.deposits.push(deposit);
        this.depositChanged.emit(this.deposits.slice());
        this.creditAmount(deposit.depositAccount, deposit.depositAmount);
        // this.accounts.find(this.accounts => this.accounts.name
        // == deposit.depositAccount).credit;
        // console.log(this.deposits);
    }
    getDeposits() {
        return this.deposits.slice();
    }
    addExpense(expense: Expense) {
        this.expenses.push(expense);
        this.expenseChanged.emit(this.expenses.slice());
        this.debitAmount(expense.ExpenseAccount, expense.ExpenseAmount);
        console.log(this.expenses);
    }
    getExpenses() {
        return this.expenses.slice();
    }

    creditAmount(depositNames, depositAmounts: number) {
        // this.accountNameSelected = this.accounts.find(x =>
        // x.name === depositNames).name;
        // console.log(this.accountNameSelected);
        this.balance = this.accounts.find(x => x.name === depositNames).credit;
        //    console.log(this.balance);
        this.accounts.find(x => x.name === depositNames).credit += depositAmounts;
    }
    debitAmount(expenseNames, expenseAmounts) {
        this.currentbalance = this.accounts.find(x => x.name === expenseNames).credit;
        this.accounts.find(x => x.name === expenseNames).credit -= expenseAmounts;
    }
    getDepositsForAccount(account: Account): Deposit[] {
        const deposits: Deposit[] = [];
        for (let i = 0; i < this.deposits.length; i++) {
            const deposit = this.deposits[i];
            if (account.name === deposit.depositAccount) {
                deposits.push(deposit);
            }
        }
        return deposits;
    }
    getExpenseForAccount(account: Account): Expense[] {
        const expenses: Expense[] = [];
        for (let i = 0; i < this.expenses.length; i++) {
            const expense = this.expenses[i];
            if (account.name === expense.ExpenseAccount) {
                expenses.push(expense);
            }
        }
        return expenses;
    }
    transferAmount(debitaccount, creditaccount, amount) {
        console.log(debitaccount, creditaccount);
        this.accounts.find(x => x.name === debitaccount).credit -= amount;
        this.accounts.find(x => x.name === creditaccount).credit += amount;
    }

}

import { Deposit } from './deposit.model';
import { Expense } from './expense.model';

export class Account {
    public name: string;
    public credit: number;
    constructor( name: string,  credit: number) {
        this.name = name;
        this.credit = credit;
    }
}

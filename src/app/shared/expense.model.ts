import { Category } from './category.model';
export class Expense {
    constructor(public ExpenseAccount: string,
        public ExpenseName: string,
        public category: Category,
        public ExpenseAmount: number) { }
}

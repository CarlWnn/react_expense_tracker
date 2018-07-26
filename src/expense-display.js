import React, { Component } from 'react';
import Expense from './expense';

class ExpenseDisplay extends Component {



    renderExpenses() {
        //return  this.props.expenses.map ( (index, expense) => <li key= {index}>{JASON.stringfy(expense)} </li>;
       // why key??
        return this.props.expenses.map(
            (expense, index) => <Expense 
             index={index} key={index} // key={expense.index} id={expense.key}
             {...expense} 
             addExpense= {this.props.addExpense}
             removeExpense={this.props.removeExpense} 
             editExpense= {this.props.editExpense}
             />
        );

    }



    render() {
        return (
            <ul>
                {this.renderExpenses()}
            </ul>
        );
    }
}

export default ExpenseDisplay;
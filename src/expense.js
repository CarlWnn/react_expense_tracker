import React, { Component } from 'react';
import ExpenseForm from './expense-form';


class Expense extends Component {
    constructor(props){
        super(props);
        this.state={isToggle:false};
        this.removeExpense= this.removeExpense.bind(this);
        this.toggleForm= this.toggleForm.bind(this);
    }
    
    removeExpense(){
        this.props.removeExpense(this.props.index);
    }

    toggleForm(){
        let toggle_state =this.state.isToggle? false: true;
        this.setState({isToggle: toggle_state});
    }

    render() {
        return (
            <li> 
            <div>${this.props.amt}, {this.props.cat}, {this.props.descr}</div>
            <button type="button" onClick={this.removeExpense}>delete</button> 
             <button type="button" onClick={this.toggleForm}>edit</button>
             {this.state.isToggle && <ExpenseForm  addButton={false}
             editExpense={this.props.editExpense} index={this.props.index}/> }
            </li>
        );
    }
}

export default Expense;

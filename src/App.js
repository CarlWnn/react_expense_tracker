import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseForm from './expense-form';
import ExpenseDisplay from './expense-display';

class App extends Component {
    constructor(props){
    super(props);
    this.state= {expenses:[] };
    this.addExpense = this.addExpense.bind(this);
    this.removeExpense = this.removeExpense.bind(this);
    this.editExpense = this.editExpense.bind(this);

}

addExpense(expense){
 // alert('function connected');
 this.setState({ expenses: this.state.expenses.concat([expense] )});
}

// removeExpense(indextoremove){
//   let filtered_expenses=  this.state.expenses.filter( (expense,index) => index !== indextoremove);
//   this.setState({expenses: filtered_expenses});
// }
 
removeExpense(index){
//   return ((e) => {  // add this line to get the function definition from its execution
let array = [...this.state.expenses]; //we cannot change state except with setState, so we duplicate it
array.splice(index, 1);
this.setState({expenses:array});
}


editExpense(index, new_expense){
  let edited_array = [...this.state.expenses];
  edited_array[index] =new_expense;
  this.setState({expenses:edited_array});

   
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <ExpenseForm addExpense ={this.addExpense} addButton={true}/>
      <ExpenseDisplay expenses={this.state.expenses} removeExpense={this.removeExpense}
      editExpense={this.editExpense} />
    </div>
  );
}



}

   export default App;

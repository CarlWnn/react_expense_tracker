import React, { Component } from 'react';
import SingleInput from './single-input';

class ExpenseForm extends Component {
constructor(props){
    super(props);
    this.state = {amt:'', cat:'', descr:''};
    this.changeExpense= this.changeExpense.bind(this);
    this.addExpense= this.addExpense.bind(this);
    this.editExpense= this.editExpense.bind(this);

}

changeExpense(e){
    this.setState({[e.target.id] : e.target.value});
}

addExpense(){
    this.props.addExpense(this.state);
    this.setState({ amt:'', cat:'', descr:'' }, () => {
    	//console.log(this.state);
    });
}

editExpense(){
    this.props.editExpense(this.props.index, this.state);
    this.setState({ amt:'', cat:'', descr:'' }, () => {
    	//console.log(this.state);
    });
}


    render() {
        return (
            <div>
               <form>
                     <SingleInput id= 'amt' content={this.state.amt} inputType='number'
                      placeholder='$' controlFunc={this.changeExpense} />
                     <SingleInput id= 'cat' content={this.state.act}  inputType='text' 
                     placeholder='Category' controlFunc={this.changeExpense} />
                     <SingleInput id= 'descr' content={this.state.descr} inputType='text'
                      placeholder='Description' controlFunc={this.changeExpense}  />
                      {this.props.addButton ?
                     <button type="button" onClick= {this.addExpense}>add</button> :
                     <button type="button" onClick= {this.editExpense}>save </button>}
               </form>
            </div>
        );
    }
}

export default ExpenseForm;
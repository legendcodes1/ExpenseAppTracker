import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';


const Expenses = (props) => {
  const [choosenDate, setChoosenDate] =  useState('2020');

  // let filterInfoText = ['2019 2021 & 2022'];

  // if (choosenDate === '2019'){
  //   filterInfoText = '2020, 2021 & 2022';
  // }else if(choosenDate === '2021'){
  //   filterInfoText = '2019, 2020 & 2022';
  // }else{
  //   filterInfoText = '2019, 2020 & 2021';
  // }
  
  const filterChangeHandler = selectedYear => {
    setChoosenDate(selectedYear);
    // console.log('Expenses.js')
    // console.log(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === choosenDate;
  });

  let expensesContent = <p> No expenses found</p> ;
  if(filteredExpenses.length > 0){
    expensesContent =  filteredExpenses.map((expense) => (
      <ExpenseItem  
   key={expense.id}
   title={expense.title}
       amount={expense.amount}
       date={expense.date}
       />
       ))
  }
  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={choosenDate} onChangeFilter={filterChangeHandler}/>
   
      {expensesContent}   
       </Card>
    </div>
  );
}

export default Expenses;

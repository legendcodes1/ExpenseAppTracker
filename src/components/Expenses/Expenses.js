import React, {useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChar';


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

  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={choosenDate} onChangeFilter={filterChangeHandler}/>
   <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
       </Card>
    </div>
  );
}

export default Expenses;

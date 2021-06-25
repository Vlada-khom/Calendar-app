import React from 'react';
import {Year} from './year.jsx';
import { Days } from './Days';
import{Month} from './Month';
import './styles.css';


function App() {
  const [currentYear, setYear] = React.useState(new Date().getFullYear());
  const [currentMonth, setMonth] = React.useState(new Date().getMonth());

  const handlerYearChange = (numberYear) => {
    setYear(numberYear);
  } 

  const handlerMonthChange = (month) => {
    setMonth(month)

  }

  const date = new Date(currentYear, currentMonth);
  const month = date.toLocaleString('en', { month: 'long' });

  return (
    <div className="App">
      <Year number={currentYear}
      onYearChange={handlerYearChange}
      />
      <Month 
      number={currentMonth}
      monthName={month}
      onMonthChange={handlerMonthChange}/>
      <Days year={currentYear} month={currentMonth}/>
    </div>
  );
}

export default App;

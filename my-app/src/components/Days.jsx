import { Link } from 'react-router-dom';
import { DaysWeek } from './DaysWeek';
import {Day} from './Day';


export function Days (props){
    let year = props.year;
    let month = props.month;
    let day = props.day;
    let current = new Date(year, month,);
    const currentFirstDay = current.getUTCDay();
    let next = new Date(year, month + 1);
    let diff = (next - current) / (1000 * 3600 * 24);
    let index = current.getDate();
  
    
    const rows = 6;
    const cols = 7;
  
    let days = [];
    let k = 1 - index - currentFirstDay + 1;
  
    for (let i = 0; i < rows; i= i + 1) {
      let td = [];
      for (let j = 0; j < cols; j++) {
        td.push(<td>{k > 0 && k <= diff ? k : ''}</td>);
        k = k + 1;
      }
      days.push(td);
    }
    return (
        <Link to={`/year/${year}/month/${Number(month + 1)}/day/${day}`} >
      <table cellSpacing="0">
        <DaysWeek />
          <tbody>
            {days.map((day, index) =>
            (<Day key={index} year={year} month={month} day={day}/>))}
          </tbody>
      </table>
        </Link>
    );
  }
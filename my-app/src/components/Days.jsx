import { DaysWeek } from './DaysWeek';

export function Days (props){
    let year = props.year;
    let month = props.month;
    let current = new Date(year, month);
    let next = new Date(year, month + 1);
    let diff = (next - current) / (1000 * 3600 * 24);
    console.log(diff);
    let index = current.getDate();
    console.log(index);
  
    
    const rows = 5;
    const cols = 7;
  
    let days = [];
    let k = 1 - index;
  
    for (let i = 0; i < rows; i= i + 1) {
      let td = [];
      for (let j = 0; j < cols; j++) {
        td.push(<td key={k}>{k > 0 && k <= diff ? k : ''}</td>);
        k = k + 1;
      }
      days.push(<tr>{td}</tr>);
      
    }
    return (
      <table>
        <DaysWeek />
        <tbody>
          {days}
        </tbody>
      </table>
    );
  }
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
  
    let table = [];
    let k = 1;
  
    for (let i = 0; i < rows; i= i + 1) {
      let tr = [];
      for (let j = 0; j < cols; j++) {
        
        tr.push(<td>{k > 0 && k <= diff ? k : ''}</td>);
        k = k + 1;
      }
      table.push(<tr>{tr}</tr>);
      
    }
    return (
      <table>
        <DaysWeek />
        {table}
      </table>
    );
  }
import { Link } from "react-router-dom";

export const Day = ({day, year, month}) => {

    return(
        <div className="day">
        {
          Number.isInteger(Number(day)) ?
          <Link to={`/year/${year}/month/${Number(month + 1)}/day/${day}`} >
              {day}
          </Link> :
          <div className="day-week">{day}</div>
        } 
        </div>
    )
}
import { Month } from "./Month";
import {Link, useHistory} from "react-router-dom";
import { createLongMonthNames } from "../tools/dateTools";

const monthNames = createLongMonthNames();

export const MonthPage = (props) => {
    const history = useHistory();

    const handleMonthChange = (event) => {
        history.push(`/year/${props.year}/month/${event.target.value}`)
    } 


    return (
        <>
        <Link to="/">Back</Link>
        <select style={{textAlign: 'center'}} onChange={handleMonthChange} value={props.month}>
            {monthNames.map((month, index) => (
                <option key={index} value={index + 1}>{month}</option>
            ))}
        </select>
        <Month {...props}/>
        </>
    )
}
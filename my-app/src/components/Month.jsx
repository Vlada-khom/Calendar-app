import React from "react";
import {Days} from './Days';
import './styles.css';

export const Month = function({year, month}) {
    const monthDate = new Date(year, month - 1);
    const monthName = monthDate.toLocaleString('default', { month: 'long' });

    return (
        <div className="month">
            {monthName}
        <Days year={Number(year)} month={month - 1}/>
        </div>

    )
}
import React from "react";
import './styles.css';

export const Month = function(props) {
    const handlePrevClick = () => {
        props.onMonthChange(props.number - 1);
    }

    const handleNextClick = () => {
        props.onMonthChange(props.number + 1);
    }

    return (
        <div className="month">
            <button onClick={handlePrevClick}>{'<'}</button>
            {props.monthName}
           <button onClick={handleNextClick}>{'>'}</button> 
        </div>

    )
}
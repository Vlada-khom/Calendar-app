import React from "react";
import './styles.css';

export const Year = function(props) {
    const handlePrevClick = () => {
        props.onYearChange(props.number - 1);
    }
    const handleNextClick = () => {
        props.onYearChange(props.number + 1);
    }
   
    return (
      <div className="year">
        <button onClick={handlePrevClick}>{'<'}</button>
         {props.number}
        <button onClick={handleNextClick}>{'>'}</button>
      </div>
    );
};
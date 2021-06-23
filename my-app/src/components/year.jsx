import React from "react";
import { Month } from './Month';
import './styles.css';



function Year () {
    let arrayYears = [];
    
    for (let i = 1970; i < 2030; i = i + 1) {
        arrayYears.push(i);
    };
    
    return (
        <div className="year">
            <button className="YearArrowLeft">{'<'}</button>
            <Month />
            <select>
                {arrayYears.map(year => 
                    <option key={year} value={year}>{year}</option>
                    )}
            </select>
            <button className="YearArrowRight">{'>'}</button>
        </div>
    );
}

export {
    Year
}
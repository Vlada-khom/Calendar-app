import React from "react";
import { Month } from './Month';
import './styles.css';


/** @type {import('React').FunctionComponent} */
export const Year = (props) => {
  const { year, onYearChange } = props;

  const month = new Array(12)
    .fill()
    .map((item, index) => index + 1);

  return (
    <>
      <div className='year'>
        <button onClick={() => onYearChange(Number(year - 1))}>prev</button>
        <div>{Number(year)}</div>
        <button onClick={() => onYearChange(Number(year + 1))}>next</button>
      </div>

      <div className="month-list">
        {month.map(monthNumber => {
          return <Month key={String(monthNumber)} year={Number(year)} month={monthNumber}/>
        })
        }
      </div>
    </>
  );
}
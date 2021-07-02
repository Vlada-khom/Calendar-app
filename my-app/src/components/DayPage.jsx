import { useState } from "react"

export const DayPage =(props) => {
    const [note, setNote] = useState('');

    const handleChangeNote = ({target: {value} }) => {
        setNote(value);
    }

    const date = new Date(props.year, props.month - 1, props.day);
    const dateLabel = date.toLocaleDateString();
    return (
        <div style={{textAlign: 'center'}}>
            <div>{dateLabel}</div>

            <textarea onChange={handleChangeNote} value={note}></textarea>
        </div>
    )
}
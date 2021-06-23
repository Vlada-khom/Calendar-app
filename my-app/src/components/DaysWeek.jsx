import './styles.css';
export const DaysWeek = () => {
    const daysWeek = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    
    return (
        <thead>
            <tr>
                {daysWeek.map(name => 
                    <th key={name}>{name}</th>
                    )}
            </tr>
        </thead>
    );
}
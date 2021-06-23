
function Month () {
    const monthName =  ['Junuary', 'Februaru', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'];

    return (
        <select>
            {monthName.map((name, index) => 
            <option key={name} value={index}>{name}</option>
            )}
        </select>
    );
}

export {
    Month,
}
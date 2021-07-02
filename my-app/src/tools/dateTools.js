export const createLongMonthNames = () => {
    const months = new Array(12)
    .fill()
    .map((item, index) => {
        const monthDate = new Date(2021,index)
        const monthName = monthDate.toLocaleString('en', { month: 'long' });
    return monthName;
    });
    return months;
}
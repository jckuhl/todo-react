/**
 * Returns a date the format of MM/DD/YYYY hh:mm
 *
 * @export
 * @param {*} date
 */
export default function datefmt(date) {
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const hour = date.getHours();
    let minutes = date.getMinutes();

    const months = [
        'January', 'February', 'March',
        'April', 'May', 'June',
        'July', 'August', 'September',
        'October', 'November', 'December'
    ]
    let adjustedHour;
    let ampm;
    if(hour <= 12) {
        adjustedHour = hour;
        ampm = adjustedHour === 12 ? 'PM' : 'AM'
    } else {
        adjustedHour = hour - 12;
        ampm = 'PM'
    }

    if(minutes < 10) {
        minutes = '0' + minutes;
    }

    if(adjustedHour < 10) {
        adjustedHour = '0' + adjustedHour;
    }

    return `${months[month]} ${day} ${year} ${adjustedHour}:${minutes} ${ampm}`;
}
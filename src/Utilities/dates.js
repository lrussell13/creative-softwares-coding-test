const datesUtilities = {
    addNumberSuffix(num){
        let j = num % 10;
        let k = num % 100;

        if (j === 1 && k !== 11) {
            return num + "st";
        }
        if (j === 2 && k !== 12) {
            return num + "nd";
        }
        if (j === 3 && k !== 13) {
            return num + "rd";
        }
        return num + "th";
    },
    getAbbrieviatedMonthNames(month) {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

        return monthNames[month];
    },
    formatDateForDisplay(date) {
        let dateNum = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        
        let displayDate = this.addNumberSuffix(dateNum);
        let displayMonth = this.getAbbrieviatedMonthNames(month);

        return `${displayMonth} ${displayDate}, ${year}`;
    },
    formatDayName(date) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
    },
    formatMonthName(date) {
        const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

        return months[date.getMonth()];
    }
}

export default datesUtilities;
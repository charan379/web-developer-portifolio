interface YearsAndMonths {
    years: number, months: number
}

function getNumberOfYearsAndMonthsBetweenDates(date1: Date, date2: Date): YearsAndMonths {
    // Get the difference between the two dates in milliseconds.
    const diffInMilliseconds = date2.getTime() - date1.getTime();

    // Convert the difference in milliseconds to days.
    const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

    // Calculate the number of years between the two dates.
    const years = Math.floor(diffInDays / 365);

    // Calculate the number of months between the two dates.
    const months = Math.floor((diffInDays - (years * 365)) / 30);

    // Return the number of years and months between the two dates.
    return {
        years, months
    };
}

export default getNumberOfYearsAndMonthsBetweenDates;
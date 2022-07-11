function findDay(currentMonth: number, currentDay: number, dateValue: Date): string {
    if (dateValue && currentMonth === +dateValue.toString()[6]) {
        if (currentDay < 10) {
            return `0[1-${currentDay}]`;
        } else if (currentDay < 20) {
            return `1[0-${currentDay.toString()[1]}]`;
        } else if (currentDay < 30) {
            return `2[0-${currentDay.toString()[1]}]`;
        } else if (currentDay <= 31) {
            return `3[0-${currentDay.toString()[1]}]`
        }
    }

    return '0[1-9]|[1-2][0-9]|3[0-1]';
}

export function validateDate(dateValue: Date): RegExp {
    const date: Date = new Date();
    const currentYear: number = +(date.getFullYear() - 18).toString()[3];
    const currentMonth = date.getMonth() + 1;
    const year1 = `19[0-9]{2}`;
    const year2 = `200[0-${currentYear}]`;
    let month = '0[1-9]|1[0-2]';
    let day = findDay(currentMonth, date.getDate(), dateValue);

    if (dateValue && +dateValue.toString()[3] == currentYear) {
        if (currentMonth < 10) {
            month = `0[0-${currentMonth}]`;
        } else {
            month = `1[${+currentMonth.toString()[1]}-2]`
        }
    }

    return new RegExp(`((${year1}-(${month})-(${day}))|(${year2}-(${month})-(${day})))`, 'i');
}
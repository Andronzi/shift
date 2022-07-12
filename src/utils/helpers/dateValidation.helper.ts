function getRegex({year, month, day}) {
    return `(${year}-(${month})-(${day}))`
}

function assignPattern(): RegExp {
    const date: Date = new Date();

    const str1 = getRegex({
        year: `200[0-${+(date.getFullYear() - 18).toString()[3]}]`,
        month: '0[1-9]|1[0-2]',
        day: '0[1-9]|[1-2][1-9]|3[0-1]'
    })

    const str2 = getRegex({
        year: '19[0-9]{2}',
        month: '0[1-9]|1[0-2]',
        day: '0[1-9]|[1-2][1-9]|3[0-1]'
    })

    return new RegExp(`(${str1}|${str2})`, 'i');
}

export default function isValid(value: string) {
    if (value.match(assignPattern())) return true;
    return false;
}
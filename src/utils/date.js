export const timeHasPassed = (time) => {
    let date = new Date(time);

    if (date.getMonth() > 0) {
        return date.getMonth() + 'mon'
    }

    if (date.getDate() > 1) {
        return date.getDate() + 'd';
    }

    if (date.getHours() > 1) {
        return date.getHours() + 'h';
    }

    if (date.getMinutes() > 1) {
        return date.getMinutes() + 'm'
    }

    return date.getSeconds() + 's'
}
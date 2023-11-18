export const
    getMonth = () => (new Date()).getMonth(),
    isItWinterNow = () => {
        const currentMonth = getMonth();

        if (
            currentMonth === 10 ||
            currentMonth === 11 ||
            currentMonth === 0 ||
            currentMonth === 1
        ) return '_winter';

        return '';
    };
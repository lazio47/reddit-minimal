const formatNumber = (num:number):string | number => {
    if (num < 1000) {
        return num;
    } else {
        const rounded = (num/1000).toFixed(1);
        return `${rounded}k`;
    }
}

export default formatNumber;
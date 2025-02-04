const formatNumber = (num:number):string => {
    if (num < 1000) {
        return num.toString();
    } else {
        const rounded = (num/1000).toFixed(1);
        return `${rounded}k`;
    }
}

export default formatNumber;
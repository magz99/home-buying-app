const monthlyPayment = (ratePercentage: number, numPeriods: number, mortgageAmount: number): number => {
    const rateYield = Math.pow((1 + ratePercentage/100/2), 1/6) - 1;
    const numerator = mortgageAmount * rateYield;
    const denominator = 1 - Math.pow((1 + rateYield), -numPeriods);
    // console.log('rateYield: ', rateYield);
    // console.log('numerator: ', numerator);
    // console.log('denominator: ', denominator);

    // By convention, mortgage payments are always rounded up.
    return parseFloat((numerator / denominator).toFixed(2)) + 0.01;
}


export {
    monthlyPayment
}
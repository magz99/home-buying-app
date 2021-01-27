const calculateGDS = (annualIncome: number, propertyTax:number, heating:number, mortgagePayment:number): number=>{
    return ((propertyTax + heating + mortgagePayment) * 12) / annualIncome;
};

const calculateTDS = (annualIncome:number, propertyTax:number, heating:number, mortgagePayment:number, carPayment:number, creditPayment:number):number =>{
    return ((propertyTax + heating + mortgagePayment + carPayment + creditPayment) * 12) / annualIncome;
};

const calculateMaxMortgage = (annualIncome:number, gdsRatio:number, propertyTax:number, heating:number): number =>{
    return ((annualIncome * gdsRatio / 12)) - propertyTax - heating;
};

export {
    calculateGDS,
    calculateTDS,
    calculateMaxMortgage
}
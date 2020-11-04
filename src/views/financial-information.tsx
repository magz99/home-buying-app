import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import DebtRatios from '../components/debt-ratios';

type debtProps = {
    annualIncome: number;
    carPayment: number;
    creditPayment: number;
    propertyTax: number;
    heating: number;
    mortgagePayment: number;

    gdsRatio: number;
    tdsRatio: number;
    maxMortgage: number;
};

const calculateGDS = (annualIncome: number, propertyTax:number, heating:number, mortgagePayment:number): number=>{
    return ((propertyTax + heating + mortgagePayment) * 12) / annualIncome;
};

const calculateTDS = (annualIncome:number, propertyTax:number, heating:number, mortgagePayment:number, carPayment:number, creditPayment:number):number =>{
    return ((propertyTax + heating + mortgagePayment + carPayment + creditPayment) * 12) / annualIncome;
};

const calculateMaxMortgage = (annualIncome:number, gdsRatio:number, propertyTax:number, heating:number): number =>{
    return ((annualIncome * gdsRatio / 12)) - propertyTax - heating;
};



class FinancialInformation extends React.Component{
   
    constructor(props: {}) {
        super(props);
       
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCalculate = this.handleCalculate.bind(this);
    }

    state:debtProps = {
        annualIncome: 0,
        carPayment: 0,
        creditPayment: 0,
        propertyTax: 0,
        heating: 0,
        mortgagePayment: 0,
        gdsRatio: 0,
        tdsRatio: 0,
        maxMortgage: 0
    };
    

    handleInputChange(event: { target: { value: any; name: string; }; }){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: parseInt(value,10)
        });
    };
    

    handleCalculate() {
        this.setState({
            gdsRatio: calculateGDS(this.state.annualIncome, this.state.propertyTax, this.state.heating, this.state.mortgagePayment),
            tdsRatio: calculateTDS(this.state.annualIncome, this.state.propertyTax, this.state.heating, this.state.mortgagePayment, this.state.carPayment, this.state.creditPayment)
        });
        this.setState({
            maxMortage: calculateMaxMortgage(this.state.annualIncome, this.state.gdsRatio, this.state.propertyTax, this.state.heating)
        });
    };

    render() {
        return <>
            <Container className="pt-4">
                <Row className="mb-4">
                    <Col><h2 className="h4">Household Financial Information</h2></Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <label htmlFor="annualIncome" className="w-100">
                            <span className="d-block mb-1">Annual Gross Income (before tax)</span>
                            <input name="annualIncome" type="text" placeholder="Enter a value" value={this.state.annualIncome} onChange={this.handleInputChange}/>
                        </label>
                        <h3 className="h5 mt-3">Household Debts/Expenses</h3>
                        <label className="w-100 ">
                            <span className="d-block mb-1">Monthly Car Payment</span>
                            <input name="carPayment" type="text" placeholder="Enter a value" value={this.state.carPayment} onChange={this.handleInputChange}/>
                        </label>
                        <label className="w-100">
                            <span className="d-block mb-1">Monthly Credit Card Payments</span>
                            <input name="creditPayment" type="text" placeholder="Enter a value" value={this.state.creditPayment}  onChange={this.handleInputChange}/>
                        </label>                    

                        <h3 className="h5 mt-3">Anticipated Home Expenses</h3>
                        <label className="w-100 ">
                            <span className="d-block mb-1">Monthly Property Tax</span>
                            <input name="propertyTax" type="text" placeholder="Enter a value" value={this.state.propertyTax}  onChange={this.handleInputChange}/>
                        </label>
                        <label className="w-100">
                            <span className="d-block mb-1">Monthly Heating</span>
                            <input name="heating" type="text" placeholder="Enter a value" value={this.state.heating} onChange={this.handleInputChange}/>
                        </label>
                        <label className="w-100">
                            <span className="d-block mb-1">Monthly Mortgage Payment</span>
                            <input name="mortgagePayment" type="text" placeholder="Enter a value" value={this.state.mortgagePayment}  onChange={this.handleInputChange}/>
                        </label>
                    </Col>
                    <Col><Button className="mt-2" variant="primary" onClick={this.handleCalculate}>Calculate Debt Ratios</Button></Col>
                    <Col>
                        <DebtRatios gdsRatio={this.state.gdsRatio} tdsRatio={this.state.tdsRatio} maxMortgage={this.state.maxMortgage} />
                    </Col>
                </Row>
            </Container>
        </>;
    }
  }

export default FinancialInformation;
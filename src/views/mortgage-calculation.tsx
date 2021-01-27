import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { monthlyPayment } from '../utils/mortage-helpers';

class MortgageCalculation extends React.Component {

  state:any = {
    mortgageRate: 0,
    amortizationPeriod: 30, //years
    mortgageAmount: 0,  
};

handleInputChange(event: { target: { value: any; name: string; }; }){
 
};


handleCalculate() {

 
};

    render() {
      return <>
            <Container className="pt-4">
                <Row className="mb-4">
                    <Col><h2 className="h4">Mortgage Information</h2></Col>
                </Row>
                <Row className="mb-4">
                    <Col sm="12">
                        <label htmlFor="mortgageRate" className="w-100">
                            <span className="d-block mb-1">Mortgage Rate (APR)</span>
                            $<input name="mortgageRate" type="text" placeholder="Enter a value" value={this.state.mortgageRate} onChange={this.handleInputChange}/>
                        </label>
                        <label className="w-100 ">
                            <span className="d-block mb-1">Mortgage Amount</span>
                            $<input name="mortgageAmount" type="text" placeholder="Enter a value" value={this.state.mortgageAmount} onChange={this.handleInputChange}/>
                        </label>
                        <label className="w-100">
                            <span className="d-block mb-1">Amortization Period (in Years)</span>
                            $<input name="amortizationPeriod" type="text" placeholder="Enter a value" value={this.state.amortizationPeriod}  onChange={this.handleInputChange}/>
                        </label>                    

                       
                    </Col>
                    <Col sm="12"><Button className="mt-5 my-sm-4" variant="primary" onClick={this.handleCalculate}>Calculate Monthly Mortgage Payment</Button></Col>
                    <Col sm="12">
                    <p>Hello mortgage calculation {monthlyPayment(8, 300, 100000)} </p>
                    </Col>
                </Row>
            </Container>
        </>;
        // return ;
    }
  }

export default MortgageCalculation;
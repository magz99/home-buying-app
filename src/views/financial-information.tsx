import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class FinancialInformation extends React.Component {
    render() {
        return <>
            <Container className="pt-4">
                <Row className="mb-4">
                    <Col><h2 className="h4">Household Financial Information</h2></Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <label className="w-100 text-left">
                            <span className="d-block mb-1">Annual Gross Income (before tax)</span>
                            <input type="text" placeholder="Enter a value" />
                        </label>
                    </Col>
                    <Col>
                        <h3 className="h5 text-left">Household Debts/Expenses</h3>
                        <label className="w-100 text-left">
                            <span className="d-block mb-1">Monthly Car Payment</span>
                            <input type="text" placeholder="Enter a value" />
                        </label>
                        <label className="w-100 text-left">
                            <span className="d-block mb-1">Monthly Credit Card Payments</span>
                            <input type="text" placeholder="Enter a value" />
                        </label>                    

                        <h3 className="h5 text-left mt-3">Anticipated Home Expenses</h3>
                        <label className="w-100 text-left">
                            <span className="d-block mb-1">Annual Property Tax</span>
                            <input type="text" placeholder="Enter a value" />
                        </label>
                        <label className="w-100 text-left">
                            <span className="d-block mb-1">Monthly Heating</span>
                            <input type="text" placeholder="Enter a value" />
                        </label>
                        <label className="w-100 text-left">
                            <span className="d-block mb-1">Monthly Mortgage Payment</span>
                            <input type="text" placeholder="Enter a value" />
                        </label>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col><h2 className="h4">What Are the Debt Ratios?</h2></Col>                    
                </Row>
                <Row className="mb-4">
                    <Col> 
                        <label className="w-100 text-left">
                            <span className="d-block mb-1">GDS (Gross Debt Service) Ratio</span>
                            <input id="gds-ratio-input" type="text" readOnly={true} disabled placeholder="Enter a value" value="39%"/>
                        </label>
                    </Col>
                    <Col> 
                        <label className="w-100 text-left">
                            <span className="d-block mb-1">TDS (Total Debt Service) Ratio</span>
                            <input id="tds-ratio-input" type="text" readOnly={true} disabled placeholder="Enter a value" value="44%"/>
                        </label>
                    </Col>            
                </Row>
                <Row>
                    <Col>
                        <label className="w-100 text-left">
                            <span className="d-block">Maximum Mortgage Payment</span>
                            <span className="d-block mb-1">(Calculated for a GDS of 39% and TDS of 44%)</span>
                            <input id="gds-ratio-input" type="text" readOnly={true} disabled placeholder="Enter a value" value="$5000"/>
                        </label>
                    </Col>
                </Row>
            </Container>
        </>;
    }
  }

export default FinancialInformation;
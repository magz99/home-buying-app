import React from 'react';

type debtRatiosProps = {
    gdsRatio: number;
    tdsRatio: number;
    maxMortgage: number;
};

class DebtRatios extends React.Component<debtRatiosProps> {
    
    render() {
        return <>
            <h2 className="h4">What Are the Debt Ratios?</h2>
            <label className="w-100">
                <span className="d-block mb-1">GDS (Gross Debt Service) Ratio</span>
                <input id="gds-ratio-input" type="text" readOnly={true} disabled value={this.props.gdsRatio}/>%
            </label>
            <label className="w-100">
                <span className="d-block mb-1">TDS (Total Debt Service) Ratio</span>
                <input id="tds-ratio-input" type="text" readOnly={true} disabled value={this.props.tdsRatio}/>%
            </label>
            <label className="w-100">
                <span className="d-block">Maximum Monthly Mortgage Payment</span>
                <span className="d-block mb-1">(Calculated for a GDS of 39% and TDS of 44%)</span>
                $<input id="max-mortgage-input" type="text" readOnly={true} disabled value={this.props.maxMortgage}/>
            </label>
        </>;
    }
};

export default DebtRatios;
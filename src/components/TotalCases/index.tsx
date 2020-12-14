import React from 'react';
import './total-cases.scss';

export class TotalCases extends React.Component {
    render() {
        return (
            <div className="total-cases-wrapper">
                <div className="total-cases-title">TOTAL CASES</div>
                <div className="total-cases-count">2314346568</div>
            </div>
        );
    }
}
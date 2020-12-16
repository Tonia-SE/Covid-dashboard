import React from 'react';
import './total-cases.scss';

export class TotalCases extends React.Component {
    state = {
        loading: true,
        totalCases: 0,
    }

    async componentDidMount() {
        const data = await fetch('https://disease.sh/v3/covid-19/all').then(res => res.json());
        this.setState({totalCases: data['cases'], loading: false });
    }
    // заголовок TOTAL CASES можно заменить на что-то вроде Now registred 100-500 cases in the world 
    render() {
        return (
            <div className="total-cases-wrapper">
                <div className="total-cases-title">TOTAL CASES</div>
                <div className="total-cases-count">{this.state.totalCases}</div>
            </div>
        );
    }
}
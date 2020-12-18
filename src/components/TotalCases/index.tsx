import React from 'react';
import './total-cases.scss';

interface Props {
    classNameCol1Total: string,
}

export class TotalCases extends React.Component<Props> {
    state = {
        loading: true,
        totalCases: 0,
        date: '',
        classNameCol1Total: "total-cases-wrapper"
    }

    async componentDidMount() {
        const data = await fetch('https://disease.sh/v3/covid-19/all').then(res => res.json());
        const date = new Date(data['updated']);
        const date1 = date.getDate() + '.' + date.getMonth() + "." + date.getFullYear();

        this.setState({totalCases: data['cases'], loading: false, date: date1});
    }

    async componentDidUpdate(prevProps: Props) {
        if (prevProps.classNameCol1Total !== this.props.classNameCol1Total) {
            this.setState({classNameCol1Total: this.props.classNameCol1Total});
        }
    }
    // заголовок TOTAL CASES можно заменить на что-то вроде Now registred 100-500 cases in the world 
    render() {
        return (
            <div className={this.state.classNameCol1Total}>
                <div className="total-cases-title">Registred</div>
                <div className="total-cases-count">{this.state.totalCases}</div>
                <div className="total-cases-title">cases for today</div>
                <div className="total-cases-title">{this.state.date}</div>
            </div>
        );
    }
}
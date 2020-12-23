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

    render() {
        return (
            <div className={this.state.classNameCol1Total}>
                <div className="total-cases-txt-wrap">
                    <p className="total-cases-title">
                        Registred {this.state.totalCases} cases for today {this.state.date}
                    </p>
                </div>
            </div>
        );
    }
}

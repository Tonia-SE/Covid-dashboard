import React, { useEffect } from 'react';
import { Switcher1 } from '../Switcher1';
import { Switcher2 } from '../Switcher2';
import { Maximise } from '../MaximiseButton';
import { Spinner } from '../Spinner';
import './table1.scss';

interface Props {
    countryUrl: string;
    tableHead: {
        th1: string,
        th2: string,
        th3: string
    };
    tableData: {
        td1: string,
        td2: string,
        td3: string
    };
}

interface State {
    loading: boolean,
    summaryData: {
        [key: string]: number
    }
}

export class Table1 extends React.Component<Props, State> {
    state: State = {
        loading: true,
        summaryData: {
            "updated": 0,
            "cases": 0,
            "todayCases": 0,
            "deaths": 0,
            "recovered": 0,
            "todayRecovered": 0,
            "active": 0,
            "critical": 0,
            "casesPerOneMillion": 0,
            "deathsPerOneMillion": 0,
            "tests": 0,
            "testsPerOneMillion": 0,
            "population": 0,
            "oneCasePerPeople": 0,
            "oneDeathPerPeople": 0,
            "oneTestPerPeople": 0,
            "activePerOneMillion": 0,
            "recoveredPerOneMillion": 0,
            "criticalPerOneMillion": 0,
            "affectedCountries": 0
        }
    }

    async componentDidUpdate(prevProps: Props) {
        if (prevProps.countryUrl !== this.props.countryUrl) {
            this.setState({loading: true });
            const data = await fetch(this.props.countryUrl).then(res => res.json());
            this.setState({summaryData: data, loading: false });
        }
    }

    async componentDidMount() {
        const data = await fetch(this.props.countryUrl).then(res => res.json());
        this.setState({summaryData: data, loading: false });
    }

    render() {
        return (
            <div className="table-wrapper">
                <div className="wrapper-toggles">
                    <Switcher1 />
                    <Switcher2 />
                    <Maximise />
                </div>
                <div className="table-responsive table1">
                    <table className="stat-table table table-hover table-responsive-md table-responsive-sm">
                        <thead>
                            <tr>
                                <th>{this.props.tableHead.th1}</th>
                                <th>{this.props.tableHead.th2}</th>
                                <th>{this.props.tableHead.th3}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !this.state.loading &&
                                (<tr>
                                    <td>
                                        {this.state.summaryData[this.props.tableData.td1]}
                                    </td>
                                    <td>
                                        {this.state.summaryData[this.props.tableData.td2]}
                                    </td>
                                    <td>
                                        {this.state.summaryData[this.props.tableData.td3]}
                                    </td>
                                </tr>)
                            }
                            {
                                this.state.loading && <div className="Loading"><Spinner /></div>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

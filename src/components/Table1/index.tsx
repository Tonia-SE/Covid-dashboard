import React from 'react';
import { Switcher } from '../Switcher';
import { Maximise } from '../MaximiseButton';
import { Spinner } from '../Spinner';
import { CountryName } from '../CountryName';
import './table1.scss';


interface Props {
    countryDetails: CountryDetails;
    tableHead: {
        th1: string,
        th2: string,
        th3: string
    },
    tableData: {
        td1: string,
        td2: string,
        td3: string
    },
    isRelativeValues: boolean,
    updateTable1: (swithcerState: boolean) => void,
    changeValuesTable1: (swithcerState: boolean) => void,
}

interface State {
    loading: boolean,
    th1: string,
    th2: string,
    th3: string,
    td1: string,
    td2: string,
    td3: string,
    isRelativeValues: boolean,
    countryDetails: CountryDetails,
    summaryData: {
        [key: string]: number
    }
}

export class Table1 extends React.Component<Props, State> {
    state: State = {
        countryDetails: this.props.countryDetails,
        th1: this.props.tableHead.th1,
        th2: this.props.tableHead.th2,
        th3: this.props.tableHead.th3,
        td1: this.props.tableData.td1,
        td2: this.props.tableData.td2,
        td3: this.props.tableData.td3,
        isRelativeValues: this.props.isRelativeValues,
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
        if (prevProps.countryDetails.countryUrl !== this.props.countryDetails.countryUrl) {
            this.setState({loading: true });
            const data = await fetch(this.props.countryDetails.countryUrl).then(res => res.json());
            this.setState({summaryData: data, loading: false });
            this.setState({countryDetails: this.props.countryDetails});
        }
        if (prevProps.tableHead !== this.props.tableHead) {
            this.setState({
                th1: this.props.tableHead.th1,
                th2: this.props.tableHead.th2,
                th3: this.props.tableHead.th3,
            });
        }
        if (prevProps.tableData !== this.props.tableData) {
            this.setState({
                td1: this.props.tableData.td1,
                td2: this.props.tableData.td2,
                td3: this.props.tableData.td3,
            });
        }
        if (prevProps.isRelativeValues !== this.props.isRelativeValues) {
            this.setState({ isRelativeValues: this.props.isRelativeValues });
        }
    }

    async componentDidMount() {
        const data = await fetch(this.props.countryDetails.countryUrl).then(res => res.json());
        this.setState({summaryData: data, loading: false });
    }

    render() {
        let td1:number = this.state.summaryData[this.state.td1];
        let td2:number = this.state.summaryData[this.state.td2];
        let td3:number = this.state.summaryData[this.state.td3];
        if (this.state.isRelativeValues) {
            td1 = Math.floor(td1 / this.state.summaryData['population'] * 100000);
            td2 = Math.floor(td2 / this.state.summaryData['population'] * 100000);
            td3 = Math.floor(td3 / this.state.summaryData['population'] * 100000);
        }

        return (
            <div className="table-wrapper">
                <div className="maximise-wrapper">
                    <Switcher onChange={this.props.updateTable1} />
                    <Switcher onChange={this.props.changeValuesTable1}/>
                    <CountryName countryName={this.state.countryDetails.countryName} countryFlag={this.state.countryDetails.countryFlag} />
                    <Maximise />
                </div>
                <div className="table-responsive table1">
                    <table className="stat-table table table-hover table-responsive-md table-responsive-sm">
                        <thead>
                            <tr>
                                <th>{this.state.th1}</th>
                                <th>{this.state.th2}</th>
                                <th>{this.state.th3}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !this.state.loading &&
                                (<tr>
                                    <td>
                                        {td1}
                                    </td>
                                    <td>
                                        {td2}
                                    </td>
                                    <td>
                                        {td3}
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

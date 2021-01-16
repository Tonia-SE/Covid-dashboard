import React from 'react';
import { Switcher } from '../Switcher/switcher';
import { Maximize } from '../MaximiseButton/maximiseButton';
import { Spinner } from '../Spinner/spinner';
import { CountryName } from '../CountryName/countryName';
import './table1.scss';
import { initialClassNameCol1Table1 } from '../../App';
import { CountryDetails } from 'src/type';

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
    setClassNameCol1: (className: string) => void,
    setClassNameCol2: (className: string) => void,
    setClassNameCol3:(className: string) => void,
    setClassNameCol1Total: (className: string) => void,
    setClassNameCol1Table1: (className: string) => void,
    setClassNameCol1Graph: (className: string) => void,
    classNameCol1Table1: string,
    switchGroup1State: boolean,
    switchGroup2State: boolean,
    switchGroup1: (swithcerState: boolean) => void,
    switchGroup2: (swithcerState: boolean) => void,
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
    },
    classNameCol1Table1: string
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
        },
        classNameCol1Table1: 'table-wrapper'
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
        if (prevProps.classNameCol1Table1 !== this.props.classNameCol1Table1) {
            this.setState({classNameCol1Table1: this.props.classNameCol1Table1});
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
            <div className={ this.state.classNameCol1Table1 }>
                <div className="maximise-wrapper">
                    <CountryName countryName={this.state.countryDetails.countryName} countryFlag={this.state.countryDetails.countryFlag} />
                    <div className="switcher-wrapper">
                        <Switcher onChange={this.props.updateTable1} switchGroupState={this.props.switchGroup1State} switchGroup={this.props.switchGroup1} />
                        <Switcher onChange={this.props.changeValuesTable1} switchGroupState={this.props.switchGroup2State} switchGroup={this.props.switchGroup2} />
                    </div>
                    <Maximize classNameCol1={'column col-md-6 d-md-block bg-light maximise-wrapper table-countries'}
                                classNameCol2={"column col-md-6 d-none pt-3"}
                                classNameCol3={"column col-md-3 d-none bg-light1 table-countries"}
                                setClassNameCol1={this.props.setClassNameCol1}
                                setClassNameCol2={this.props.setClassNameCol2}
                                setClassNameCol3={this.props.setClassNameCol3}
                                classNameCol1Graph={'d-none'}
                                classNameCol1Total={'d-none'}
                                classNameCol1Table1={initialClassNameCol1Table1}
                                setClassNameCol1Total={this.props.setClassNameCol1Total}
                                setClassNameCol1Table1={this.props.setClassNameCol1Table1}
                                setClassNameCol1Graph={this.props.setClassNameCol1Graph}
                                />
                </div>
                <div className="table-responsive table1">
                    {
                        this.state.loading && <div className="Loading"><Spinner /></div>
                    }
                    {
                        !this.state.loading &&
                    (<table className="stat-table table table-hover table-responsive-md table-responsive-sm">
                        <thead>
                            <tr className='table-cases-wrap'>
                                <th className='cases-head'>{this.state.th1}</th>
                                <th className='cases-head'>{this.state.th2}</th>
                                <th className='cases-head'>{this.state.th3}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='cases-info'>
                                    {td1}
                                </td>
                                <td className='cases-info'>
                                    {td2}
                                </td>
                                <td className='cases-info'>
                                    {td3}
                                </td>
                            </tr>
                        </tbody>
                    </table>)
                    }
                </div>
            </div>
        );
    }
}

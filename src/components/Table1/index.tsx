import React from 'react';
import { Switcher } from '../Switcher';
import { Maximise } from '../MaximiseButton';

export class Table1 extends React.Component {

    state = {
        loading: true, 
        summaryData: {
            "updated": Number,
            "cases": Number,
            "todayCases": Number,
            "deaths": Number,
            "recovered": Number,
            "todayRecovered": Number,
            "active": Number,
            "critical": Number,
            "casesPerOneMillion": Number,
            "deathsPerOneMillion": Number,
            "tests": Number,
            "testsPerOneMillion": Number,
            "population": Number,
            "oneCasePerPeople": Number,
            "oneDeathPerPeople": Number,
            "oneTestPerPeople": Number,
            "activePerOneMillion": Number,
            "recoveredPerOneMillion": Number,
            "criticalPerOneMillion": Number,
            "affectedCountries": Number
        }
    }

    async componentDidMount() {
        //const url = "https://api.covid19api.com/summary";
        const url = "https://disease.sh/v3/covid-19/all";
        const data = await fetch(url).then(res => res.json());
        this.setState({summaryData: data, loading: false });
    }

    render() {
        if (this.state.loading) {
            return (<>
                    <div className="wrapper-toggles">
                        <Switcher />
                        <Switcher />
                        <Maximise />
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p>loading...</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            );
        }

        if (!this.state.loading) {;
            return (
                <>
                    <div className="wrapper-toggles">
                        <Switcher />
                        <Switcher />
                        <Maximise />
                    </div>
                    <div className="table-responsive table1">
                        <table className="table table-striped table-sm table1">
                            <thead>
                                <tr>
                                    <th>Total cases</th>
                                    <th>Total deaths</th>
                                    <th>Total recovered</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>                                            
                                    <td>
                                        {this.state.summaryData.cases}
                                    </td>
                                    <td>
                                        {this.state.summaryData.deaths}
                                    </td>
                                    <td>
                                        {this.state.summaryData.recovered}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            );
        }
    }
}

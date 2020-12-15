import React, { useEffect } from 'react';
import { Switcher } from '../Switcher';
import { Maximise } from '../MaximiseButton';
import './table1.scss';

interface Props {
    countryUrl: string;
}

export class Table1 extends React.Component<Props> {
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

    async componentDidUpdate(prevProps: Props){
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
        // if (this.state.loading) {
        //     return (<>
        //         <div className="table-wrapper">
        //             <div className="wrapper-toggles">
        //                 <Switcher />
        //                 <Switcher />
        //                 <Maximise />
        //             </div>
        //             <div className="table-responsive table1">
        //                 <table className="table table-striped table-sm table1">
        //                     <thead>
        //                         <tr>
        //                             <th>Total cases</th>
        //                             <th>Total deaths</th>
        //                             <th>Total recovered</th>
        //                         </tr>
        //                     </thead>
        //                 </table>
        //                 <p>Loading...</p>
        //             </div>
        //         </div>

        //         </>
        //     );
        // }
        return (
            <div className="table-wrapper">
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
                            {
                                !this.state.loading &&
                                (<tr>
                                    <td>
                                        {this.state.summaryData.cases}
                                    </td>
                                    <td>
                                        {this.state.summaryData.deaths}
                                    </td>
                                    <td>
                                        {this.state.summaryData.recovered}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                    {
                        this.state.loading && <p>Loading...</p>
                    }
                </div>
            </div>
        );
    }
}

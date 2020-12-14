import React from 'react';
import { Maximise } from '../MaximiseButton';
import { Form } from '../Form';
import { Switcher } from '../Switcher';
import {Data} from '../Data';


export class Table2 extends React.Component {

    state = {
        loading: true, 
        countriesData: []
    }

    async componentDidMount() {
        const url = "https://disease.sh/v3/covid-19/countries";
        const data = await fetch(url).then(res => res.json());
        this.setState({countriesData: data, loading: false });
    }

    render() {        
        
        if (this.state.loading) {
            return (
                <>
                    <div className="wrapper-form">
                        <Form />
                        <Maximise />
                        <Switcher />
                        <Switcher />
                    </div>
                    <div className="table-responsive table1">
                        <table>
                            <tbody>
                                <tr>                
                                <td>
                                    <p>loading...</p>
                                </td>
                                </tr>
                            </tbody>    
                        </table>
                    </div>
                </>
            );
        }

        if (!this.state.loading) {
            return (
                <>
                    <div className="wrapper-countries">
                        <Form />
                        <Maximise />
                        <Switcher />
                        <Switcher />
                    </div>
                    <div className="table-responsive table2">
                        <table className="table table-striped table-sm table2">
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Total cases</th>
                                </tr>
                            </thead>
                            <tbody>                                
                                {this.state.countriesData.map((country: Country) => {
                                    return (
                                        <tr>
                                            <td>
                                                <img src={country.countryInfo.flag} style={{ border:3, height:'15%'}}/>
                                            </td>
                                            <td>
                                                {country.country}
                                            </td>
                                            <td>
                                                {country.cases}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </>
            );
        }
    }
}


class Tablee extends React.Component {
    render() {
        return (
            <>
                <div className="maximise-wrapper">
                    <Maximise />
                </div>
                <div className="table-responsive table2">
                    <table className="table table-striped table-sm table2">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Header</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                            </tr>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                            </tr>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                            </tr>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                            </tr>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                            </tr>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                            </tr>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                            </tr>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                            </tr>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                            </tr>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                            </tr>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                            </tr>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                            </tr>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                            </tr>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                            </tr>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

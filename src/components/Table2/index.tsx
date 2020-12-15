import React, {useState} from 'react';
import { Maximise } from '../MaximiseButton';
import { Form } from '../Form';
import { Switcher1 } from '../Switcher1';
import { Switcher2 } from '../Switcher2';
import { Spinner } from '../Spinner';
interface Props {
    chooseCountry: ChooseCountry
}

export class Table2 extends React.Component<Props> {

    state = {
        loading: true,
        countriesData: []
    }

    async componentDidMount() {
        const url = "https://disease.sh/v3/covid-19/countries";
        const data = await fetch(url).then(res => res.json());

        data.sort((a:Country, b:Country) => {
            // Use toUpperCase() to ignore character casing
            const bandA = a['cases'] ;
            const bandB = b['cases'];
            let comparison = 0;
            if (bandA < bandB) {
                comparison = 1;
            } else if (bandA > bandB) {
                comparison = -1;
            }
            return comparison;
        });

        this.setState({countriesData: data, loading: false });
    }

    render() {

        if (this.state.loading) {
            return (
                <>
                    <div className="wrapper-form">
                        <Form />
                        <Maximise />
                        <Switcher1 />
                        <Switcher2 />
                    </div>
                    <div className="table-responsive table2">
                        <table className="stat-table table table-hover table-responsive-md table-responsive-sm">
                            <tbody>
                                <Spinner />
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
                        <Switcher1 />
                        <Switcher2 />
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
                                        <tr key={country.country} onClick={() => {
                                            this.props.chooseCountry(country);
                                        }}>
                                            <td >
                                                <img src={country.countryInfo.flag} style={{ border:5, height:'13%'}}/> {country.country}
                                            </td>
                                            <td>
                                                {country['cases']}
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
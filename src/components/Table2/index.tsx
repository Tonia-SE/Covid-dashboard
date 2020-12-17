import React from 'react';
import { Maximise } from '../MaximiseButton';
import { Form } from '../Form';
import { Switcher } from '../Switcher';
import { Spinner } from '../Spinner';
import { CountryName } from '../CountryName';
import './table2.scss';

interface Props {
    chooseCountry: ChooseCountry;
    updateTable1: (swithcerState: boolean) => void;
    changeValuesTable1: (swithcerState: boolean) => void;
}

export class Table2 extends React.Component<Props> {

    state = {
        loading: true,
        countriesData: [],
        value: 'cases',
        isFormVisible: false,
        selectedCountryName: '',
        selectedCountryFlag: '',
        filterString: ''
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
                    <div className="table-responsive table2 ">
                        <div className="wrapper-form">
                            <Switcher onChange={this.props.updateTable1} />
                            <Switcher onChange={this.props.changeValuesTable1}/>
                            <CountryName countryName={this.state.selectedCountryName} countryFlag={this.state.selectedCountryFlag} />
                            <Maximise />
                        </div>
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

                    <div className="table-responsive table2">
                        <div className="wrapper-countries">
                            <div className="maximise-wrapper">
                                <Switcher onChange={this.props.updateTable1} />
                                <Switcher onChange={this.props.changeValuesTable1}/>
                                <CountryName countryName={this.state.selectedCountryName} countryFlag={this.state.selectedCountryFlag} />
                                <Maximise />
                            </div>
                            { this.state.isFormVisible && <Form onfilterchange={(filterStringFromInput) => this.setState({filterString: filterStringFromInput})}/> }
                        </div>

                        <table className="table table-striped table-sm ">
                            <thead>
                                <tr>
                                    <th> <div className='title-wrapper' > <span>Country</span><button onClick={() => {
                                            this.setState({isFormVisible: !this.state.isFormVisible});
                                            this.setState({filterString: ''});}
                                        } className="btn btn-outline-secondary" type="button">🔎</button></div></th>
                                    <th>
                                        <select className='select-country' onChange={(evt) => {this.setState({value: `${evt.target.value}`});}}>
                                            <option className='table-point' value='cases'>Total cases</option>
                                            <option className='table-point' value='deaths'>Total deaths</option>
                                            <option className='table-point' value='recovered'>Total recovered</option>
                                        </select>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.countriesData.filter((country: Country) => {return country.country.includes(this.state.filterString);}).map((country: Country) => {
                                    return (
                                        <tr key={country.country} onClick={() => {
                                            this.setState({selectedCountryName: country.country});
                                            this.setState({selectedCountryFlag: country.countryInfo.flag});
                                            this.props.chooseCountry(country);
                                        }}>
                                            <td >
                                                <img src={country.countryInfo.flag} style={{ border:5, height:'13%'}}/> {country.country}
                                            </td>
                                            <td>
                                                {country[`${this.state.value}`]}

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

import React from 'react';
import { Maximize } from '../MaximiseButton';
import { Form } from '../Form';
import { Switcher } from '../Switcher';
import { Spinner } from '../Spinner';
import { CountryName } from '../CountryName';
import './table2.scss';
import { Country, CountryDetails } from 'src/type';

interface Props {
    setClassNameCol1: (className: string) => void;
    setClassNameCol2: (className: string) => void;
    setClassNameCol3:(className: string) => void;
    setCountries: (countries: Array<Object>) => void;
    setCountryDetails: (countries: CountryDetails) => void;
    updateTable1: (swithcerState: boolean) => void;
    changeValuesTable1: (swithcerState: boolean) => void;
    countryDetails: CountryDetails;
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
        console.log('data', data);

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
        this.props.setCountries(data);
    }

    render() {

        if (this.state.loading) {
            return (
                <>
                    <div className="table2 ">
                        <div className="wrapper-form">
                            <CountryName countryName={this.props.countryDetails.countryName} countryFlag={this.props.countryDetails.countryFlag } />
                            <Switcher onChange={this.props.updateTable1} />
                            <Switcher onChange={this.props.changeValuesTable1}/>
                            <Maximize classNameCol1={'column col-md-3 d-none bg-light table-countries'}
                                        classNameCol3={"column col-md-6 d-md-block bg-light1 table-countries maximise-style"}
                                        classNameCol2={"column col-md-3 d-none pt-3"}
                                        
                                        setClassNameCol1={this.props.setClassNameCol1}
                                        setClassNameCol3={this.props.setClassNameCol3}
                                        setClassNameCol2={this.props.setClassNameCol2}
                                        />
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
                                <CountryName countryName={this.props.countryDetails.countryName} countryFlag={this.props.countryDetails.countryFlag } />
                                <div className="switcher-wrapper">
                                    <Switcher onChange={this.props.updateTable1} />
                                    <Switcher onChange={this.props.changeValuesTable1}/>
                                </div>
                                <Maximize classNameCol1={'column col-md-3 bg-light table-countries d-none'}
                                        classNameCol3={"column col-md-6 d-md-block bg-light1 table-countries maximise-style"}
                                        classNameCol2={"column col-md-3 pt-3 d-none"}
                                        setClassNameCol1={this.props.setClassNameCol1}
                                        setClassNameCol3={this.props.setClassNameCol3}
                                        setClassNameCol2={this.props.setClassNameCol2}
                                        />
                            </div>
                            { this.state.isFormVisible && <Form onfilterchange={(filterStringFromInput) => this.setState({filterString: filterStringFromInput})}/> }
                        </div>

                        <table className="table-responsive table table-striped table-sm ">
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
                                        <tr className='table-cell' key={country.country} onClick={() => {
                                            this.setState({selectedCountryName: country.country});
                                            this.setState({selectedCountryFlag: country.countryInfo.flag});
                                            const countryDetails: CountryDetails = {
                                                countryUrl: `https://disease.sh/v3/covid-19/countries/${country.countryInfo.iso3}`,
                                                countryFlag: country.countryInfo.flag,
                                                countryName: country.country,                                                
                                            };
                                            this.props.setCountryDetails(countryDetails);
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

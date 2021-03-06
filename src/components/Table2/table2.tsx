import React from 'react';
import { Maximize } from '../MaximiseButton/maximiseButton';
import { Form } from '../Form/form';
import { Switcher } from '../Switcher/switcher';
import { Spinner } from '../Spinner/spinner';
import { CountryName } from '../CountryName/countryName';
import './table2.scss';
import { Country, CountryDetails } from 'src/type';
import { countriesUrl } from '../../consts';

interface Props {
    setClassNameCol1: (className: string) => void;
    setClassNameCol2: (className: string) => void;
    setClassNameCol3:(className: string) => void;
    setGraphParameter:(className: string) => void;
    setCountries: (countries: Array<Object>) => void;
    setCountryDetails: (countries: CountryDetails) => void;
    updateTable1: (swithcerState: boolean) => void;
    changeValuesTable1: (swithcerState: boolean) => void;
    isRelativeValues: boolean;
    countryDetails: CountryDetails;
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
    switchGroup1State: boolean,
    switchGroup2State: boolean,
    switchGroup1: (swithcerState: boolean) => void,
    switchGroup2: (swithcerState: boolean) => void,
}

export class Table2 extends React.Component<Props> {
    state = {
        loading: true,
        countriesData: [],
        value: '0',
        isFormVisible: false,
        selectedCountryName: '',
        selectedCountryFlag: '',
        filterString: '',
        possibleValues: [
            [this.props.tableHead.th1, this.props.tableData.td1],
            [this.props.tableHead.th2, this.props.tableData.td2],
            [this.props.tableHead.th3, this.props.tableData.td3],
        ],
    }

    possibleGraphValues = [
        'cases',
        'deaths',
        'recovered'
    ]

    sortCountriesData(parameter: string) {
        this.state.countriesData.sort((a:Country, b:Country) => {
            const bandA = a[parameter] ;
            const bandB = b[parameter];
            let comparison = 0;
            if (bandA < bandB) {
                comparison = 1;
            } else if (bandA > bandB) {
                comparison = -1;
            }
            return comparison;
        });
    }

    async componentDidMount() {
        const data = await fetch(countriesUrl).then(res => res.json());;
        this.setState({countriesData: data, loading: false });
        this.props.setCountries(data);
    }

    async componentDidUpdate(prevProps: Props) {
        if (prevProps.tableHead !== this.props.tableHead || prevProps.tableData !== this.props.tableData) {
            this.setState({
                possibleValues: [
                    [this.props.tableHead.th1, this.props.tableData.td1],
                    [this.props.tableHead.th2, this.props.tableData.td2],
                    [this.props.tableHead.th3, this.props.tableData.td3],
                ]
            });
        }
        if (prevProps.isRelativeValues !== this.props.isRelativeValues) {
            this.setState({ isRelativeValues: this.props.isRelativeValues });
        }
    }

    render() {
        const dataField = this.state.possibleValues[Number(this.state.value)][1];
        this.sortCountriesData(dataField);
        return (
            <>
                <div className="table-responsive table2">
                    <div className="wrapper-countries">
                        <div className="maximise-wrapper">
                            <CountryName countryName={this.props.countryDetails.countryName} countryFlag={this.props.countryDetails.countryFlag } />
                            <div className="switcher-wrapper">                                    
                                <Switcher onChange={this.props.updateTable1} switchGroupState={this.props.switchGroup1State} switchGroup={this.props.switchGroup1}/>
                                <Switcher onChange={this.props.changeValuesTable1} switchGroupState={this.props.switchGroup2State} switchGroup={this.props.switchGroup2}/>
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
                    {
                        this.state.loading && <div className="Loading"><Spinner /></div>
                    }
                    {
                        !this.state.loading &&
                        (<div className="table2-wrapper">
                            <table className="table-country table table-striped table-sm ">
                                <thead className="table-head">
                                    <tr>
                                        <th> 
                                            <div className='title-wrapper' > 
                                                <span>Country</span>
                                                <button onClick={() => {
                                                    this.setState({isFormVisible: !this.state.isFormVisible});
                                                    this.setState({filterString: ''});}
                                                } className="btn btn-outline-secondary keyboard" type="button">🔎</button>
                                            </div>
                                        </th>
                                        <th>
                                            <div className='title-wrapper' > 
                                                <select className='select-country' onChange={(evt) => {
                                                        this.props.setGraphParameter(this.possibleGraphValues[Number(evt.target.value)]);
                                                        this.setState({value: `${evt.target.value}`});
                                                    }}>
                                                    <option className='table-point' value='0'>{this.state.possibleValues[0][0]}</option>
                                                    <option className='table-point' value='1'>{this.state.possibleValues[1][0]}</option>
                                                    <option className='table-point' value='2'>{this.state.possibleValues[2][0]}</option>
                                                </select>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="table-body">
                                    {this.state.countriesData.filter((country: Country) => {return country.country.includes(this.state.filterString);}).map((country: Country) => {
                                        return (
                                            <tr className='table-cell' key={country.country} onClick={() => {
                                                this.setState({selectedCountryName: country.country});
                                                this.setState({selectedCountryFlag: country.countryInfo.flag});
                                                const countryDetails: CountryDetails = {
                                                    countryUrl: `https://disease.sh/v3/covid-19/countries/${country.countryInfo.iso3}`,
                                                    graphURL: `https://disease.sh/v3/covid-19/historical/${country.countryInfo.iso3}\?lastdays=100`,
                                                    countryFlag: country.countryInfo.flag,
                                                    countryName: country.country,
                                                };
                                                this.props.setCountryDetails(countryDetails);
                                            }}>
                                                <td >
                                                    <img className='flag' src={country.countryInfo.flag}/> {country.country}
                                                </td>
                                                <td>
                                                    {!this.props.isRelativeValues && country[dataField] }
                                                    {this.props.isRelativeValues && Math.floor(country[dataField]/Number(country['population']) * 100000) }
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>)
                    }
                </div>
            </>
        );
    }
}

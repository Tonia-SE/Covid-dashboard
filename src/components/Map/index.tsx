import React from 'react';
import { Maximize } from '../MaximiseButton';
import { CountryName } from '../CountryName';
import { Switcher } from '../Switcher';
import CovidMap from "./components/CovidMap";
import addGeoAndLegendInfo from './tasks/addGeoAndLegendInfo';
import Legend from './components/Legend';
import legendItems from './entities/LegendItems';
import { Spinner } from '../Spinner';


import "leaflet/dist/leaflet.css";

import './Map.scss';
import { CountryDetails, Table1DataAttrs } from 'src/type';

interface Props {
    countryDetails: CountryDetails;
    countries: any;
    tableData: Table1DataAttrs; 
    updateTable1: (swithcerState: boolean) => void;
    changeValuesTable1: (swithcerState: boolean) => void;
    setClassNameCol1: (className: string) => void;
    setClassNameCol2: (className: string) => void;
    setClassNameCol3: (className: string) => void;
    setCountryDetails: (details: CountryDetails) => void;
} 

export class Map extends React.Component<Props> {
    state = {
        countryDetails: this.props.countryDetails
    }
    async componentDidUpdate(prevProps: Props) {
        if (prevProps.countryDetails.countryName !== this.props.countryDetails.countryName) {
            this.setState({countryDetails: this.props.countryDetails});
        }
    }

    mapStyle = {
        fillColor: "white",
        weight: 1,
        color: "black",
        fillOpacity: 1,
    };

    onEachCountry (country:any, layer:any) {
        layer.options.fillColor = country.properties[`${this.props.tableData.td1}Color`];
        const name = country.properties.ADMIN;
        const textToDisplay = country.properties[this.props.tableData.td1];
        layer.on({click: ()=>{
            const countryDetails = {
            countryUrl: `https://disease.sh/v3/covid-19/countries/${country.properties.ISO_A3}`,
            graphURL: `https://disease.sh/v3/covid-19/historical/${country.properties.ISO_A3}?lastdays=100`,
            countryFlag: country.properties.flag,
            countryName: country.properties.ADMIN,                                                
            };
            this.props.setCountryDetails(countryDetails);
        }});
        layer.bindTooltip(`${name} ${textToDisplay}`, {
            direction: 'right',
            permanent: false,
            sticky: true,
            offset: [10, 0],
            opacity: 0.9,
            backgroundColor: 'black'
        }).openTooltip();
    };

    render() {
        const legendItemsReverse = [...legendItems].reverse();
        return (
            <>
                <h1 className="h2">COVID-19 Dashboard</h1>
                <div className="justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <div className="maximise-wrapper">
                    <CountryName countryName={this.state.countryDetails.countryName} countryFlag={this.state.countryDetails.countryFlag} />
                        <div className="switcher-wrapper">
                            <Switcher onChange={this.props.updateTable1} />
                            <Switcher onChange={this.props.changeValuesTable1}/>
                        </div>
                        <Maximize classNameCol1={'column d-none bg-light table-countries'}
                                    classNameCol2={"column col-md-9 pt-3 maximise-style"}
                                    classNameCol3={"column d-none bg-light1 table-countries"}
                                    setClassNameCol1={this.props.setClassNameCol1}
                                    setClassNameCol2={this.props.setClassNameCol2}
                                    setClassNameCol3={this.props.setClassNameCol3}/>
                    </div>
                    <div>
                    {this.props.countries.length === 1 ? (
                        <div className="Loading"><Spinner /></div>
                    ) : (
                        <div>
                        <CovidMap countries={addGeoAndLegendInfo(this.props.countries)} setCountryDetails={this.props.setCountryDetails} parameter={this.props.tableData.td1}/>
                        <Legend legendItems={legendItemsReverse} />
                        </div>
                    )}
                    </div>

                </div>
            </>
        );
    }
}

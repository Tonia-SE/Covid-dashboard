import React from 'react';
import { Maximize } from '../MaximiseButton/maximiseButton';
import { CountryName } from '../CountryName/countryName';
import { Switcher } from '../Switcher/switcher';
import CovidMap from "./components/CovidMap";
import addGeoAndLegendInfo from './tasks/addGeoAndLegendInfo';
import Legend from './components/Legend';
import legendItems from './entities/LegendItems';
import { Spinner } from '../Spinner/spinner';
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
    switchGroup1State: boolean,
    switchGroup2State: boolean,
    switchGroup1: (swithcerState: boolean) => void,
    switchGroup2: (swithcerState: boolean) => void,
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
    render() {
        const legendItemsReverse = [...legendItems].reverse();
        return (
            <>  <div className="map-title">
                    <h1>COVID-19 Dashboard</h1>
                </div>
                <div className="justify-content-between flex-wrap flex-md-nowrap align-items-center">
                    <div className="maximise-wrapper">
                        <CountryName countryName={this.state.countryDetails.countryName} countryFlag={this.state.countryDetails.countryFlag} />
                            <div className="switcher-wrapper">
                                <Switcher onChange={this.props.updateTable1} switchGroupState={this.props.switchGroup1State} switchGroup={this.props.switchGroup1} />
                                <Switcher onChange={this.props.changeValuesTable1} switchGroupState={this.props.switchGroup2State} switchGroup={this.props.switchGroup2} />
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

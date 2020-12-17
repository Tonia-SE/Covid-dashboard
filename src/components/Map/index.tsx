import React from 'react';
import { Maximise } from '../MaximiseButton';
import MapWrapper from "./Map";
import { CountryName } from '../CountryName';
import { Switcher } from '../Switcher';
import './Map.scss';


interface Props {
    countryDetails: CountryDetails;
    updateTable1: (swithcerState: boolean) => void;
    changeValuesTable1: (swithcerState: boolean) => void;
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
        return (
            <>
                <h1 className="h2">COVID-19 Dashboard</h1>
                <div className="justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <div className="maximise-wrapper">
                        <Switcher onChange={this.props.updateTable1} />
                        <Switcher onChange={this.props.changeValuesTable1}/>
                        <Maximise />
                        <CountryName countryName={this.state.countryDetails.countryName} countryFlag={this.state.countryDetails.countryFlag} />
                    </div>
                    <MapWrapper />
                </div>
            </>
        );
    }
}

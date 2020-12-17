import React from 'react';
import { Maximise } from '../MaximiseButton';
import { Switcher } from '../Switcher';
import { CountryName } from '../CountryName';

import './graph.scss';

interface Props {
    countryDetails: CountryDetails;
    updateTable1: (swithcerState: boolean) => void;
    changeValuesTable1: (swithcerState: boolean) => void;
}    

export class Graph extends React.Component<Props> {
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
            <div className='table-graph-wrapper'>
                <div className="maximise-wrapper">
                    <Switcher onChange={this.props.updateTable1} />
                    <Switcher onChange={this.props.changeValuesTable1}/>
                    <CountryName countryName={this.state.countryDetails.countryName} countryFlag={this.state.countryDetails.countryFlag} />
                    <Maximise />
                </div>
                <div className="graph">
                    <p>Grath coming soon...</p>
                </div>
            </div>
        </>
        );
    }
}


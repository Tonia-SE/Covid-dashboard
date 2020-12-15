import React from 'react';
import { Maximise } from '../MaximiseButton';
import { Switcher } from '../Switcher';
import MapWrapper from "./Map";

export class Map extends React.Component {
    render() {
        return (
            <>
                <div className="maximise-wrapper">
                    <Switcher />
                    <Switcher />
                    <Maximise />
                </div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <h1 className="h2">COVID-19 Dashboard</h1>
                    <MapWrapper />
                </div>    
            </>
        );
    }
}

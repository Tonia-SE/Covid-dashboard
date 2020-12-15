import React from 'react';
import { Maximise } from '../MaximiseButton';
import MapWrapper from "./Map";
import { Switcher } from '../Switcher';
import './Map.scss';

export class Map extends React.Component {
    render() {
        return (
            <>
                <h1 className="h2">COVID-19 Dashboard</h1>
                <div className="justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <div className="maximise-wrapper">
                        <Switcher />
                        <Switcher />
                        <Maximise />
                    </div>
                    <MapWrapper />
                </div>
            </>
        );
    }
}

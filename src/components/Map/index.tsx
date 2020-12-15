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
                <div>
                    <MapWrapper />
                </div>
            </>
        );
    }
}

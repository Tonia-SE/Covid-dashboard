import React from 'react';
import { Maximise } from '../MaximiseButton';
import { Switcher } from '../Switcher';;

export class Graph extends React.Component {
    render() {
        return (
        <>
            <div className="maximise-wrapper">
                <Switcher />
                <Switcher />
                <Maximise />
            </div>
            <div className="graph">
                <p>Grath coming soon...</p>
            </div>
        </> 
        );
    }
}


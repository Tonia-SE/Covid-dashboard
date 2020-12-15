import React from 'react';
import { Maximise } from '../MaximiseButton';
import { Switcher1 } from '../Switcher1';
import { Switcher2 } from '../Switcher2';
import './graph.scss';

export class Graph extends React.Component {
    render() {
        return (
        <>
            <div className='table-graph-wrapper'>
                <div className="maximise-wrapper">
                    <Switcher1 />
                    <Switcher2 />
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


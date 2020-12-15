import React from 'react';
import loading from '../../assets/loading-small.png';
import './spinner.scss';

export class Spinner extends React.Component {
    render() {
        return (
            <img className="spinner" src={loading} />
        );
    }
}

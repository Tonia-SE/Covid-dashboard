import React from 'react';
import loading from '../../assets/loading-small.png';

export class Spinner extends React.Component {
    render() {
        return (
            <img className="spinner" src={loading} />
        );
    }
}
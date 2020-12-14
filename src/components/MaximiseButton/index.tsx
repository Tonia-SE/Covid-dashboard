import React from 'react';
import './MaximiseButton.scss';

export class Maximise extends React.Component {
    render() {
        return (
            <button className="btn btn-primary maximise-btn" type="submit">
                zoom_out_map
            </button>
        );
    }
}

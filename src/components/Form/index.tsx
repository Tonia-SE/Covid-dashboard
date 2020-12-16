import React from 'react';
import './form.scss';
export class Form extends React.Component {
    render() {
        return (
        <>
            <div className="input-group mb-3">
                <input type="text" className="form-control" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">⌨</button>
                </div>
            </div>
        </>
        );
    }
}

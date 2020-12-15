import React from 'react';

export class Switcher2 extends React.Component {
    render() {
        return (
            <div className="second-wrapper-btns">
                <p>all</p>
                <label className="switch">
                    <input className="switch-input" type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <p>/100 000</p>
            </div>
        );
    }
}
import React from 'react';

export class Switcher1 extends React.Component {
    render() {
        return (
            <div className="second-wrapper-btns">
                <p>total</p>
                <label className="switch">
                    <input className="switch-input" type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <p>today</p>
            </div>
        );
    }
}

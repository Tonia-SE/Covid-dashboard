import React from 'react';

export class Switcher extends React.Component {
    render() {
        return (
            <div className="second-wrapper-btns">
                <label className="switch">
                    <input className="switch-input" type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
        );
    }
}

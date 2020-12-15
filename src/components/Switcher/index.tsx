import React from 'react';
import './switcher1.scss';

interface SwitcherProps {
    onChange?: (value: boolean) => void
}
interface State {
    checked: boolean;
}
export class Switcher extends React.Component<SwitcherProps, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            checked: false
        };
    }

    toggleStatus() {
        const nextValue = !this.state.checked;
        this.setState({
            checked: nextValue
        });

        this.props.onChange?.(nextValue);
    }

    render() {
        return (
            <div className="first-wrapper-btns">
                <div className="wrapper">
                    <input type="checkbox" className="checkbox" onChange={() => this.toggleStatus()} checked={this.state.checked} />
                    <label onClick={() => this.toggleStatus()} />
                </div>
            </div>
        );
    }
}

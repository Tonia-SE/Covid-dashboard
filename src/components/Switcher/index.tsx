import React from 'react';
import './switcher1.scss';

interface SwitcherProps {    
    switchGroupState?: boolean,
    switchGroup?: (value: boolean)=>void,
    onChange?: (value: boolean) => void,
}

interface State {
    checked: boolean
}

export class Switcher extends React.Component<SwitcherProps, State> {
    constructor(props: SwitcherProps) {
        super(props);
        this.state = {
            checked: false
        };
    }

    async componentDidUpdate(prevProps: SwitcherProps) {
        if (prevProps.switchGroupState !== this.props.switchGroupState) {
            if (this.props.switchGroupState !== undefined) {
                this.setState({checked: this.props.switchGroupState});
            }
        }
    }

    toggleStatus() {
        const nextValue = !this.state.checked;
        this.setState({
            checked: nextValue
        });
        this.props.onChange?.(nextValue);
        this.props.switchGroup?.(nextValue);
    }

    render() {
        return (
            <div className="first-wrapper-btns">
                <div className="wrapper">
                    <input type="checkbox" className="checkbox" onChange={ () => {
                        this.toggleStatus();                        
                    }} checked={this.state.checked} />
                    <label onClick={() => {
                        this.toggleStatus();
                        //this.props.onChange?.(this.state.checked);
                    }} />
                </div>
            </div>
        );
    }
}

import React from 'react';
import { render } from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import './form.scss';
interface Props {
    onfilterchange: (value: string) => void
}
export class Form extends React.Component<Props> {
    state = {
        layoutName: "default",
        input: ""
      };
      
  commonKeyboardOptions = {
    onChange: (value: any) => this.onChange(value),
    onKeyPress: (button: any) => this.onKeyPress(button),
    theme: "simple-keyboard hg-theme-default hg-layout-default",
    physicalKeyboardHighlight: true,
    syncInstanceInputs: true,
    mergeDisplay: true,
    debug: true
  };

  keyboardOptions = {
    ...this.commonKeyboardOptions,
    display: {
      "{tab}": "tab ⇥",
      "{backspace}": "⌫",
      "{enter}": "enter ↵",
      "{capslock}": "caps lock ⇪",
      "{shiftleft}": "shift ⇧",
      "{shiftright}": "shift ⇧",
      "{space}": "space",
    }
  };

      onChange (input: any) {
        this.setState({ input });
        this.props.onfilterchange(input);
      };

      onKeyPress = (button: any) => {
        if (button === "{shift}" || button === "{lock}") this.handleShift();
      };
    
      handleShift = () => {
        const layoutName = this.state.layoutName;
    
        this.setState({
          layoutName: layoutName === "default" ? "shift" : "default"
        });
      };
    
      render () {
        return (
        <div className="input-group mb-3">
          <input
              type="text"
              className="form-control"
              value={this.state.input}
              placeholder={"Country"}
              onChange={(event) => this.onChange(event)}
          />
          <div className={"keyboardContainer"}>
            <Keyboard
              baseClass={"simple-keyboard-main"}
              layoutName={this.state.layoutName}
              {...this.keyboardOptions}
            />
          </div>
        </div>
        );
      }
}

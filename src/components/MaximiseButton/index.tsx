import React from 'react';
import './MaximiseButton.scss';
import { initialClassNameCol1, initialClassNameCol2, initialClassNameCol3 } from '../../App';
import { initialClassNameCol1Total, initialClassNameCol1Table1, initialClassNameCol1Graph } from '../../App';

interface Props {
    classNameCol1: string;
    classNameCol2: string;
    classNameCol3: string;
    setClassNameCol1: (className: string) => void;
    setClassNameCol2: (className: string) => void;
    setClassNameCol3:(className: string) => void;
    classNameCol1Total?: string; 
    classNameCol1Table1?: string; 
    classNameCol1Graph?: string;
    setClassNameCol1Total?: (className: string) => void;
    setClassNameCol1Table1?: (className: string) => void;
    setClassNameCol1Graph?: (className: string) => void;
} 

export class Maximize extends React.Component<Props> {
    state={
        isMaximized: false
    };
    toogle() {
        if(this.state.isMaximized) {
            this.setState({isMaximized: false});
        }
        else {
            this.setState({isMaximized: true});
        }
    };
    render() {
        return (
            <button className="btn btn-primary maximise-btn" type="submit" onClick={() => {
                if(this.state.isMaximized) {
                    this.props.setClassNameCol1(initialClassNameCol1);
                    this.props.setClassNameCol2(initialClassNameCol2);
                    this.props.setClassNameCol3(initialClassNameCol3);
                    this.props.setClassNameCol1Total?.(initialClassNameCol1Total);
                    this.props.setClassNameCol1Table1?.(initialClassNameCol1Table1);
                    this.props.setClassNameCol1Graph?.(initialClassNameCol1Graph);
                    this.toogle();
                }
                else {
                    this.props.setClassNameCol1(this.props.classNameCol1);
                    this.props.setClassNameCol2(this.props.classNameCol2);
                    this.props.setClassNameCol3(this.props.classNameCol3);
                    if (this.props.classNameCol1Total !== undefined) {
                        this.props.setClassNameCol1Total?.(this.props.classNameCol1Total);
                    }
                    if (this.props.classNameCol1Table1 !== undefined) {
                        this.props.setClassNameCol1Table1?.(this.props.classNameCol1Table1);
                    }
                    if (this.props.classNameCol1Graph !== undefined) {
                        this.props.setClassNameCol1Graph?.(this.props.classNameCol1Graph);
                    }
                    this.toogle();
                }
            }}>
                zoom_out_map
            </button>
        );
    }
}

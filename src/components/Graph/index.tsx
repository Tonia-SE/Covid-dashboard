import React from 'react';
import { Maximize } from '../MaximiseButton';
import { Switcher } from '../Switcher';
import { CountryName } from '../CountryName';
import { initialClassNameCol1Graph } from '../../App';

import './graph.scss';

interface Props {
    countryDetails: CountryDetails;
    updateTable1: (swithcerState: boolean) => void;
    changeValuesTable1: (swithcerState: boolean) => void;
    setClassNameCol1: (className: string) => void;
    setClassNameCol2: (className: string) => void;
    setClassNameCol3:(className: string) => void;
    setClassNameCol1Total: (className: string) => void;
    setClassNameCol1Table1: (className: string) => void;
    setClassNameCol1Graph: (className: string) => void;
    classNameCol1Graph: string;
}    

export class Graph extends React.Component<Props> {
    state = {
        countryDetails: this.props.countryDetails,
        classNameCol1Graph: 'table-graph-wrapper'
    }
    async componentDidUpdate(prevProps: Props) {
        if (prevProps.countryDetails.countryName !== this.props.countryDetails.countryName) {
            this.setState({countryDetails: this.props.countryDetails});
        }
        if (prevProps.classNameCol1Graph !== this.props.classNameCol1Graph) {
            this.setState({classNameCol1Graph: this.props.classNameCol1Graph});
        }
    }
    render() {
        return (
        <>
            <div className={this.state.classNameCol1Graph}>
                <div className="maximise-wrapper">
                    <Switcher onChange={this.props.updateTable1} />
                    <Switcher onChange={this.props.changeValuesTable1}/>
                    <CountryName countryName={this.state.countryDetails.countryName} countryFlag={this.state.countryDetails.countryFlag} />
                    <Maximize classNameCol1={'column col-md-12 d-md-block bg-light table-countries'}
                                classNameCol2={"column col-md-6 d-none pt-3"}
                                classNameCol3={"column col-md-3 d-none bg-light1 table-countries"}
                                setClassNameCol1={this.props.setClassNameCol1}
                                setClassNameCol2={this.props.setClassNameCol2}
                                setClassNameCol3={this.props.setClassNameCol3}
                                classNameCol1Graph={initialClassNameCol1Graph}
                                classNameCol1Total={'d-none'}
                                classNameCol1Table1={'d-none'}
                                setClassNameCol1Total={this.props.setClassNameCol1Total}
                                setClassNameCol1Table1={this.props.setClassNameCol1Table1}
                                setClassNameCol1Graph={this.props.setClassNameCol1Graph}/>
                </div>
                <div className="graph">
                    <p>Grath coming soon...</p>
                </div>
            </div>
        </>
        );
    }
}


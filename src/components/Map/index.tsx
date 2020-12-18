import React from 'react';
import { Maximize } from '../MaximiseButton';
import MapWrapper from "./Map";
import { CountryName } from '../CountryName';
import { Switcher } from '../Switcher';
import './Map.scss';


interface Props {
    countryDetails: CountryDetails;
    updateTable1: (swithcerState: boolean) => void;
    changeValuesTable1: (swithcerState: boolean) => void;
    
    //] = useState('column col-md-3 d-md-block bg-light table-countries')
    //useState("column col-md-12 pt-3");
    //useState("column col-md-3 d-md-block bg-light1 table-countries");
    setClassNameCol1: (className: string) => void;
    setClassNameCol2: (className: string) => void;
    setClassNameCol3:(className: string) => void;
} 

export class Map extends React.Component<Props> {
    state = {
        countryDetails: this.props.countryDetails
    }
    async componentDidUpdate(prevProps: Props) {
        if (prevProps.countryDetails.countryName !== this.props.countryDetails.countryName) {
            this.setState({countryDetails: this.props.countryDetails});
        }
    }
    render() {
        return (
            <>
                <h1 className="h2">COVID-19 Dashboard</h1>
                <div className="justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <div className="maximise-wrapper">
                        <Switcher onChange={this.props.updateTable1} />
                        <Switcher onChange={this.props.changeValuesTable1}/>
                        <Maximize classNameCol1={'column d-none bg-light table-countries'}
                                    classNameCol2={"column col-md-12 pt-3"}
                                    classNameCol3={"column d-none bg-light1 table-countries"}
                                    setClassNameCol1={this.props.setClassNameCol1}
                                    setClassNameCol2={this.props.setClassNameCol2}
                                    setClassNameCol3={this.props.setClassNameCol3}/>
                        <CountryName countryName={this.state.countryDetails.countryName} countryFlag={this.state.countryDetails.countryFlag} />
                    </div>
                    <MapWrapper />
                </div>
            </>
        );
    }
}

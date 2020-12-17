import React from 'react';
import './countryName.scss';

interface Props {
    countryName: string;
    countryFlag: string;
}

export class CountryName extends React.Component<Props> {
    state = {
        loading: true,
        countryName: '',
        countryFlag: '',
        totalCases: 0,
    }

    async componentDidUpdate(prevProps: Props) {
        console.log('xxxxxxxxxxxxxxxxxxxxxx');
        if (prevProps.countryName !== this.props.countryName) {
            this.setState({countryName : this.props.countryName});
            this.setState({countryFlag : this.props.countryFlag});
        }
    }

    async componentDidMount() {
        this.setState({countryName : this.props.countryName});
        this.setState({countryFlag : this.props.countryFlag});
    }

    render() {
        let isCountry = false;
        if (this.state.countryName !== '') {
            isCountry = true;
        }
        return (
            <div className="country-name-wrapper">                
                { (isCountry) && <p> <img src={this.state.countryFlag} style={{ border:5, height:'2vh'}}/> {this.state.countryName} </p>}
            </div>
        );
    }
}
import React from 'react';

export class Data extends React.Component {
    state = {
        loading: false, 
        countriesData: null
    }

    async componentDidMount() {
        const url = "https://api.covid19api.com/summary";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({countriesData: data, loading: false });
    }

    render() {
        return <></>;
    }

}

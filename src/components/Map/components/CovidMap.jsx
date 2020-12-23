import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./CovidMap.scss";
import { throws } from "assert";

function renderCountries(mapStyle, countryGEOJson, parameter) {
   return (
    <GeoJSON style={mapStyle} data={countryGEOJson} onEachFeature={onEachCountry} />
  );
}

class CovidMap extends React.Component {

  constructor(props) {    
    super(props);
    this.state = {
      parameter: this.props.parameter
    };
    this.state.isUpdated = false;
    this.state.mapStyle = {
      fillColor: "white",
      weight: 1,
      color: "black",
      fillOpacity: 1,
    };
  }

  onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties[`${this.props.parameter}Color`];
    const name = country.properties.ADMIN;
    const textToDisplay = country.properties[this.props.parameter];
    layer.on({click: () => {      
      const countryDetails = {
        countryUrl: `https://disease.sh/v3/covid-19/countries/${country.properties.ISO_A3}`,
        graphURL: `https://disease.sh/v3/covid-19/historical/${country.properties.ISO_A3}\?lastdays=100`,
        countryFlag: country.properties.flag,
        countryName: country.properties.ADMIN,                                          
      };
      this.props.setCountryDetails(countryDetails);
    }});
    layer.bindTooltip(`${name} ${textToDisplay}`, {
      direction: 'right',
      permanent: false,
      sticky: true,
      offset: [10, 0],
      opacity: 0.9,
      backgroundColor: 'black'
    }).openTooltip();
  };

  render() {
    return (
      <MapContainer className="map-container" style={{ height: "65vh" }} zoom={2} minZoom={1} maxZoom={4} center={[20, 20]}>
        <GeoJSON
          key = {this.props.parameter} 
          style={{
            fillColor: "white",
            weight: 1,
            color: "black",
            fillOpacity: 1,
          }}
          data={this.props.countries}
          onEachFeature={this.onEachCountry}
        />
      </MapContainer>
    );
  }
}

export default CovidMap;
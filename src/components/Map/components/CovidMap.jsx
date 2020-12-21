import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./CovidMap.scss";

// Нужно настроить работу с props { countries, setCountryDetails, parameter }
// parameter должен сохраняться в state и нужно отслеживать его изменение
class CovidMap1 extends React.Component {

  constructor(props) {    
    super(props);
    this.state = {
      parameter: this.props.parameter
    };
  }

  mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  onEachCountry(country, layer) {
    layer.options.fillColor = country.properties[`${this.props.parameter}Color`];
    const name = country.properties.ADMIN;
    const textToDisplay = country.properties[this.props.parameter];
    layer.on({click: ()=>{
      console.log(country.properties.ADMIN);
      const countryDetails = {
        countryUrl: `https://disease.sh/v3/covid-19/countries/${country.properties.ISO_A3}`,
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
          style={this.mapStyle}
          data={this.props.countries}
          onEachFeature={this.onEachCountry}
        />
      </MapContainer>
    );
  }
}  


// Не удалось подтянуть это в tsx, потому что не уадалось описать тип данных для GeoJSON data
const CovidMap = ({ countries, setCountryDetails, parameter }) => {

  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties[`${parameter}Color`];
    const name = country.properties.ADMIN;
    const textToDisplay = country.properties[parameter];
    layer.on({click: ()=>{
      console.log(country.properties.ADMIN);
      const countryDetails = {
        countryUrl: `https://disease.sh/v3/covid-19/countries/${country.properties.ISO_A3}`,
        countryFlag: country.properties.flag,
        countryName: country.properties.ADMIN,                                                
      };
      setCountryDetails(countryDetails);
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

  return (    
    <MapContainer className="map-container" style={{ height: "65vh" }} zoom={2} minZoom={1} maxZoom={4} center={[20, 20]}>
      <GeoJSON
        style={mapStyle}
        data={countries}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
};

export default CovidMap;
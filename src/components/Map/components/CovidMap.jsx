import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css";
const CovidMap = ({ countries }) => {
  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    const confirmedText = country.properties.confirmedText;
    layer.bindTooltip(`${name} ${confirmedText}`, {
      direction: 'right',
      permanent: false,
      sticky: true,
      offset: [10, 0],
      opacity: 0.9,
      backgroundColor: 'black'
  }).openTooltip();
  };

  return (
    <MapContainer style={{ height: "70vh" }} zoom={2} center={[20, 20]}>
      <GeoJSON
        style={mapStyle}
        data={countries}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
};

export default CovidMap;

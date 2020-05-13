import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
// import Marker from "../marker/Marker";
// import axios from 'axios';

export default class GmapMap extends Component {
  state = {
    center: {
      lat: 40.4167754,
      lng: -3.7037901999999576
    },
    tours: null,
    zoom: 15
  };



  render() {
    const handleApiLoaded = (map, maps) => {
      // use map and maps objects
    };
    if(this.props.route){
        console.log(this.props.route)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCm0meO5cjbh70YvG6BIQVh5GqRHXHG7Uw" }}
          defaultCenter={this.props.location}
          defaultZoom={this.state.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          {this.props.route.map(elem => (
             <div className="gmarker"
             lat={elem.location.lat}
             lng={elem.location.lng}
             text="My Marker" 
            >{elem.number}</div>
          ))}
        </GoogleMapReact>
      </div>
    )
    }else{
        return <h1>Cargando...</h1>
    }
  }
}

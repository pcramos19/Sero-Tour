import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../marker/Marker";
import axios from 'axios';
// import { Link } from 'react-router-dom'

export default class GmapMap extends Component {
  state = {
    center: {
      lat: 40.4167754,
      lng: -3.7037901999999576
    },
    tours: [],
    zoom: 15
  };

  _updateAllTasks() {
    axios.get(`${process.env.REACT_APP_API_URL}/toursMini`).then(tours => {
      tours = tours.data;
      this.setState({
        ...this.state,
        tours: tours
      });
    });
  }

  componentDidMount() {
    this._updateAllTasks();
}


  render() {
    const handleApiLoaded = (map, maps) => {
      // use map and maps objects
    };

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCm0meO5cjbh70YvG6BIQVh5GqRHXHG7Uw" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          {this.state.tours.map(elem => (
             <Marker 
             lat={elem.location.lat}
             lng={elem.location.lng}
             text="My Marker" 
            //  onclick={e=>this.goTour(e)}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

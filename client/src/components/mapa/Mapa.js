import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom'
import "./Mapa.scss";
import GmapMap from '../google-maps/gmaps/GmapsMap';

class Mapa extends Component {
    state={
      tours: []
    }

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
        const { tours } = this.state;
        
        return (
    
            <div className="mapa">
                <GmapMap {...tours}></GmapMap>
            </div>

        )
      }
    }
    
    export default Mapa;
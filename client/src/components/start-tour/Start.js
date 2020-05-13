import React, { Component } from "react";
import "./Start.scss";
import axios from "axios";
import { Link } from 'react-router-dom';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import GmapMap from '../google-maps/gmaps/GmapsRoute';

class Start extends Component {
    state = {
    tour: null,
    };
    
    _updateTour() {
    axios.get(`${process.env.REACT_APP_API_URL}/tour/${this.props.tourId}`)
      .then(tourChosen => {
        this.setState({
          tour: tourChosen.data
        });
      });
    }

    componentDidMount() {
    this._updateTour();
    }



    render(){
    if(this.state.tour){
        const { route, location } = this.state.tour
        return(
        <>
        <div className="mapa-start">
            <GmapMap route={route} location={location}></GmapMap>
        </div>
        <div className="container-start">
            <div>
                {route.map((stage, idx) => {
                return (
                 <div className="start" key={idx}>
                    <div className="into-start">
                        <div className="into-start-text">
                            <h1>{idx+1}</h1>
                            <Link className="pedro" to={{
                                pathname: '/route/detail',
                                state: {
                                stage: stage
                                        }}}
                        >        <h1>{stage.name}</h1>
                            </Link>
                        </div>
                        <div>
                            <AudiotrackIcon/>
                        </div>
                    </div>
                </div>
                )
                })}
            </div>
        </div>
        </>
        )


    }else{
        return <p>Cargando...</p>
        }
    }
}
export default Start;
import React from 'react';
// import axios from 'axios';
// import AuthService from "../auth/AuthService";
import { Link } from 'react-router-dom'
import "./Home.scss";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
// import Star from 'react-bootstrap/Star';


function Home (props) {

    
    const { tours } = props;
 
    return tours.map((tour, i) => (

      <div className="results-wrapper" key={i}>
        <Link to={`/tour/${tour._id}`}>
          <img src={tour.img} alt={tour.title}/>
        </Link>
        <div className="results-wrapper-text">
          <div>          
            <Link className="pedro" to={`/tour/${tour._id}`}>
            <h1 key={i}>{tour.title}</h1>
            </Link>
            {/* ({tour.owner}) ? <h2>{tour.owner.name}</h2> : ''; */}
          </div> 
          <div className="rating">
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarHalfIcon/>
            <StarBorderIcon/>
          </div>
        </div>
    </div>
    )) 

}

export default Home;
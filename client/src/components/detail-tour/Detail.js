import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Detail.scss";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import CompartirPost from '../sharePost/compartirPost';
import cirularProgress from "../circularProgress/circularProgress";


class Detail extends Component {
  state = {
    tour: null,
    comments: null,
    open: false,
    fav: false,
    urlPost: "ironserotonin.herokuapp.com",
    titlePost: "Detalle Tour",
    resumenPost: "Este es el detalle"
  };

  _updateTour() {
    axios.get(`${process.env.REACT_APP_API_URL}/tour/${this.props.tourId}`)
      .then(tourChosen => {
        this.setState({
          tour: tourChosen.data
        });
      });
  }
  switchFav() {
    this.setState({
      fav: !this.state.fav
    });
  }

  switchMenu() {
    this.setState({
      open: !this.state.open
    });
  }

  componentDidMount() {
    this._updateTour();
  }

  _comments(){
    console.log("entra")
    const comments = this.state.tour.comments;
    comments.map(comment => {
     return (
     <div>
        <p>{comment.description}</p>
      </div>
     )
    })
  }
  

  render() {
    if(this.state.tour){
      const { title, img, _id , languages, duration , description, comments} = this.state.tour
      return (
      <div className="detail">
        <div className="detail-description">
          <h1>{title}</h1>
          <img src={img} alt={title} />
          <div className="detail-start">
            <div>
              <Link className="pedro" to={`/start-tour/${_id}`}>
              <button>Iniciar Tour</button>
              </Link>
            </div>
            <div className="icon-detail">
              <div onClick={() => this.switchFav()}>{this.state.fav ? <FavoriteIcon/>: <FavoriteBorderIcon/>}</div>
              {/* <ShareIcon/> */}
              <CompartirPost Url={this.state.urlPost} Titulo={this.state.titlePost} Resumen={this.state.resumenPost} />
            </div>
          </div>
          <div className="into-detail"> 
            <h3>Idioma: {languages}</h3>
            <div className="h3">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarHalfIcon/>
              <StarBorderIcon/>
            </div>
            <h3>Duración: {duration} min</h3>         
          </div>
          <p><strong>Descripción</strong></p>
          <p>{description}</p>
        </div>
          <div className="comments">

            <p><strong onClick={() => this.switchMenu()}>{this.state.open ? "Ocultar Comentarios" : "Mostrar Comentarios"}</strong></p>
            { this.state.open && (
              <div>
            {comments.map(comment => {
              return (
                <div className="comments-unique">
                  <h5>{comment.title}</h5>
                  <p>{comment.description}</p>
                </div>
              )
            })}
            </div>
            )}
          </div>
        </div>
      );


    }else{
      return <cirularProgress/>
    }

  }
}

export default Detail;

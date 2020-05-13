import React, { Component } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
import "./Stage.scss";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

class Stage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      stage :null,
      play: true
    }
    this.url = "https://res.cloudinary.com/dtdnbdupy/video/upload/v1584034050/folder-name/5052_cfhayy.mp3";
    this.audio = new Audio(this.url);
    this.togglePlay = this.togglePlay.bind(this);
  }
  
  componentDidMount(){
    this.setState({
      stage: this.props.location.state.stage
    })
  }

  togglePlay() {
    this.setState({ play: !this.state.play });
    console.log(this.audio);
    this.state.play ? this.audio.play() : this.audio.pause();
    }

  render(){
    if(this.state.stage){
      const {image, name, description} = this.state.stage
      return(

        <div className="stage">
          <div className="detail">
              <img src={image} alt={name} />
              <div className="audio-stage">
                <div>
                  <button onClick={this.togglePlay}>{this.state.play ? <PlayCircleFilledIcon/> : <PauseCircleFilledIcon/>}</button>
                </div>
                <div>
                  <h1>{name}</h1>
                </div>
              </div>
              <p>{description}</p>
              {/* <Link to={`/start-tour/${this.props.history.goBack}`}>
                <button>Volver</button>
              </Link> */}
          </div>
        </div>
      )
    }else return <p>Cargando...</p>
      
  }
    
}

export default Stage
import React, { Component } from 'react';
import "./Fav.scss";
import axios from "axios";
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';

class Fav extends Component {

    state={
        user:null
    }

    _updateUser() {
        axios.get(`${process.env.REACT_APP_API_URL}/profile/${this.props.userInSession._id}`)
          .then(user => {
            this.setState({
              user: user.data
            });
          });
      }
    
    // deleteFav(id){
    //     axios.get(`${process.env.REACT_APP_API_URL}/delete-fav/${id}`)
    //     .then(_=> this._updateUser());
    //   }

    addActivityToFav = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/${this.props.userInSession._id}/fav/add`, { fav: this.state.specificActivity._id })
        .then(() => this.setState({ activityIsFav: true }))
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this._updateUser();
    }

    render(){
        console.log(this.props.userInSession)
      
        if(this.state.user){
        const { img, name, email, fav } = this.state.user   
            return(
                <div className="profile">
                    <div className="border">
                        <img src={img} alt={name}/>
                        <h1>{name}</h1>
                        <p>Email: {email}</p>
                    </div>
                    <div className="fav">
                    <p><strong>Favoritos</strong></p>
                    {fav.map(elem => { 
                        console.log(elem)
                        return (
                        <div className="fav-wrapper">
                            <Link to={`/tour/${elem._id}`}>
                                <img src={elem.img} alt={elem.title}/>
                            </Link>
                            <div className="fav-wrapper-text">
                                <div>          
                                    <Link className="pedro" to={`/tour/${elem._id}`}>
                                        <h1>{elem.title}</h1>
                                    </Link>
                                </div> 
                                <div className="rating">
                                    <FavoriteIcon/>
                                </div>
                            </div>
                         </div>
                        )
                    })}
                    </div>
                </div>
            )
        } else {
            return <p>Cargando...</p>
        }

    }
}

export default Fav;
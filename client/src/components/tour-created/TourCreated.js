import React, { Component } from 'react';
import "./TourCreated.scss";
import axios from "axios";
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

class TourCreated extends Component {

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
      
    deleteTask(id){
        axios.get(`${process.env.REACT_APP_API_URL}/delete-tour/${id}`)
        .then(_=> {
            this._updateUser()
            this.props.update();
            });
      }

    componentDidMount() {
        this._updateUser();
    }

    render(){
        console.log(this.props.userInSession)

        if(this.state.user){
        const { img, name, email, toursCreated } = this.state.user   
            return(
                <div className="profile">
                    <div className="border">
                        <img src={img} alt={name}/>
                        <h1>{name}</h1>
                        <p>Email: {email}</p>
                    </div>
                    <div className="fav">
                    <p><strong>Mis Tours</strong></p>
                    {toursCreated.map(elem => { 
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
                                    <Link className="pedro" to={`/edit-tour/${elem._id}`}>
                                    <button><EditIcon/></button>  
                                    </Link>
                                    <button onClick={() => this.deleteTask(elem._id)}><DeleteIcon/></button>  
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

export default TourCreated;
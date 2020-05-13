import React, { Component } from 'react';
import "./Profile.scss";
import { Link } from "react-router-dom";
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class Profile extends Component {

    handleLogout = e => {
        this.props.logout();
      };
      

    render(){
        return(
            <div className="profile">
                <div className="border">
                    <img src={this.props.userInSession.img} alt={this.props.userInSession.name}/>
                    <h1>{this.props.userInSession.name}</h1>
                    <p>Email: {this.props.userInSession.email}</p>
                    <p>Usuario: @{this.props.userInSession.username}</p>
                    <p>Descripción:</p>
                    <p>{this.props.userInSession.description}</p>
                </div>

                <div className="configuration">
                    <h4>Cuenta</h4>
                    <Link to="/edit-profile">
						<p>Editar perfil</p>
					</Link>
                    <Link to="" onClick={this.handleLogout}>
						<h5>Cerrar sesión</h5>
					</Link>
                </div>
                
                <div className="configuration">
                    <h4>Preferencias de usuario</h4>
                    <div className="checkbox">
                        <p>Vista previa elementos multimedia</p>
                        <Checkbox color="primary"/>
                    </div>
                    <div className="checkbox">
                        <p>Usar altavoz</p>
                        <Checkbox color="primary"/>
                    </div>
                    <div className="checkbox">
                        <p>Efectos de sonido</p>
                        <Checkbox color="primary"/>
                    </div>
                    <div className="checkbox">
                        <p>Activar notificaciones</p>
                        <Checkbox color="primary"/>
                    </div>
                </div>

            </div>
        )
    }
}

export default Profile;
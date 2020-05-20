// auth/Signup.js
import React, { Component } from 'react';
import AuthService from './AuthService';
import "./Signup.css";
import { Link } from "react-router-dom";

//signup y login son iguales a excepción de el html renderizado y el endpoint de nuestra API rest a la que llamamos
//uno llama a /signup y el otro a /login usando nuestro AuthService
class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', name: '', email: '' };
    this.service = new AuthService();
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const name = this.state.name;
    const email = this.state.email;

    //aquí llamamos al endpoint /signup de nuestra API Rest usando nuestro AuthService
    this.service.signup(username, password, name, email)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
            name: "",
            email: "",
        });
        //aquí elevamos el nuevo usuario una vez creado a App usando getUser via props
        //por tanto, informamos a App de que el nuevo usuario ha sido creado, provocando un re-render
        //y mostrando la parte de contenidos. Mira la función getUser de App para más info (date cuenta de que establece el state de App)
        this.props.getUser(response.user)
    })
    .catch(error => {
      this.setState({
        username: username,
        password: password,
        name: name,
        email: email,
        error: true
      });
    })
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      

  render() {
    return(
      <div className="login-box">
        <div className="login">
          <div className="form">
            <img src="../../../logo_trans.png" alt=""/>
            <form onSubmit={this.handleFormSubmit}>
              <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={ e => this.handleChange(e)} required/>
              <input type="text" name="username" placeholder="Usuario" value={this.state.username} onChange={ e => this.handleChange(e)} required/>
              <input type="text" name="name" placeholder="Nombre y Apellidos" value={this.state.name} onChange={ e => this.handleChange(e)} required/>
              {/* <input type="text" name="surname" placeholder="Apellidos" value={this.state.surname} onChange={ e => this.handleChange(e)} required/> */}
              <input type="password" name="password" placeholder="Contraseña" value={this.state.password} onChange={ e => this.handleChange(e)} required/>
              <h5>{this.state.error ? 'El usuario ya existe' : ''}</h5>
              <input type="submit" value="Sign up" />
            </form>
            <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
        </div>
      </div>
    </div>
    )
  }
}

export default Signup;
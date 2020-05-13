// auth/Signup.js
import React, { Component } from 'react';
import AuthService from './AuthService'
import "./Login.css";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false
        }, ()=>{
          this.props.getUser(this.state)
        });

        this.props.getUser(response)
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {

    return (
    <div className="login-box">
      <div className="login">
        <div className="form">
          <img src="../../../logo_trans.png" alt=""/>
          <form onSubmit={this.handleFormSubmit}>
            <input type="text" name="username" placeholder="Usuario" value={this.state.username} onChange={e => this.handleChange(e)} required/>
            <input type="password" name="password" placeholder="Contraseña" value={this.state.password} onChange={e => this.handleChange(e)} required/>
            <h5>{this.state.error ? 'Usuario o contraseña incorrecta' : ''}</h5>
            <input type="submit" value="Login" />
          </form>
          <p>¿Aún no tienes cuenta? <Link to="/signup">Regístrate</Link></p>
        </div>
      </div>
    </div>
    )
  }
}

export default Login;
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';


class Navbar extends Component {
  

  handleLogout = e => {
    this.props.logout();
  };



  render() {
    if (this.props.userInSession) {
      return (
        <nav className="nav-style">
          <div className="log-name">
            <Link to="/home">
              <img src="../../../logo_trans.png" alt="Sero Tour"/>
            </Link>
          </div> 
          <Dropdown>
								<Dropdown.Toggle variant="none">
									<img src={this.props.userInSession.img} alt={this.props.userInSession.username} />
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item href="#/action-1">
                    <Link className="pedro" to="/profile"> {this.props.userInSession.name}</Link>
                  </Dropdown.Item>

									<Dropdown.Item href="#/action-2">
                    <Link className="pedro" to="/fav"> Favoritos</Link>
                  </Dropdown.Item>

                  <Dropdown.Item href="#/action-2">
                    <Link className="pedro" to="/tour-created"> Mis Tours</Link>
                  </Dropdown.Item>

                  <Dropdown.Item href="#/action-2">
                    <Link className="pedro"> Configuración</Link>
                  </Dropdown.Item>

									<Dropdown.Divider />

									<Dropdown.Item href="#/action-3">
										<Link className="pedro log" to="" onClick={this.handleLogout}>
											Cerrar sesión
										</Link>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
        </nav>
      );
    } else {
      return (
        <div>
          <nav className="nav-style">
            <img src="../../../logo.jpg" alt="Serotonin"/>
            {/* <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link> */}
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
import React, { Component } from "react";
import "./App.scss";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import Navbar from "./components/nav-bar/Navbar";
import Home from "./components/home/Home";
import Mapa from "./components/mapa/Mapa";
import Detail from "./components/detail-tour/Detail";
import Search from "./components/search/Search";
import Profile from "./components/profile/Profile";
import EditProfile from "./components/edit-profile/EditProfile";
import Footer from "./components/footer/Footer";
import Start from "./components/start-tour/Start";
import Stage from "./components/route/Stage";
import NewTour from "./components/new-tour/NewTour";
import Fav from "./components/fav/Fav";
import TourCreated from "./components/tour-created/TourCreated";
import EditTour from "./components/edit-tour/EditTour";

import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      tours: [],
      toursOriginal:[],
      users: [],
      resultsId: []
    };
    this.service = new AuthService();

    this.fetchUser();
  }

  _updateAllTours() {
    axios.get(`${process.env.REACT_APP_API_URL}/tours`)
    .then(tours => {
      tours = tours.data;

      this.setState({
        ...this.state,
        tours: tours,
        toursOriginal: tours
      } );
    });
  }

  update = tours => {
    axios.get(`${process.env.REACT_APP_API_URL}/tours`).then(tours => {
      tours = tours.data;
      this.setState({
        tours: tours
      });
    });
  }

  updateAllUser = users => {
    axios.get(`${process.env.REACT_APP_API_URL}/users`).then(users => {
      users = users.data;
      this.setState({
        users: users
      });
    });
  }

  componentDidMount() {
    this._updateAllTours();
    this.updateAllUser();
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  fetchUser() {
    return this.service
      .loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false
        });
      });
  }

  searchBar = value => {
        const toursOriginal = [...this.state.toursOriginal]
        let newList = []
        console.log(value)
      
          newList = toursOriginal.filter(item => {
    
            const lc = item.title.toLowerCase();
            console.log(lc)
            const filter = value.toLowerCase();
            return lc.includes(filter);
          })
        
        console.log(newList)
          this.setState({ tours: newList })
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <div className="App">
          {/* <Redirect to="/home" /> */}
          <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
        <div className="main-wrapper">
          <Switch>
            <Route exact path="/login"><Redirect to="/home" /></Route>
            <Route exact path="/signup"><Redirect to="/home" /></Route>
            <Route exact path="/home" render={() => { return (
              <div className="home-container">
                <Search searchBar = {(value) => this.searchBar(value)}></Search>
                <div className="main-container">
                  <Home userInSession={this.state.loggedInUser} tours = {this.state.tours}/>
                </div>
              </div>);}}/>
            <Route exact path="/mapa" render={props => { return <Mapa tourId={props.match.params.id}></Mapa>; }}/> 
            <Route exact path="/tour/:id" render={props => { return <Detail tourId={props.match.params.id}></Detail>; }}/>
            <Route exact path="/start-tour/:id" render={props => { return <Start tourId={props.match.params.id}></Start>; }}/>
            <Route exact path="/route/detail" render={props => { return <Stage tourId={props.match.params.id} {...props}></Stage>; }}/>
            <Route exact path="/fav" render={() => { return <Fav userInSession={this.state.loggedInUser}></Fav>; }}/>
            <Route exact path="/tour-created" render={() => { return <TourCreated userInSession={this.state.loggedInUser} update={this.update}></TourCreated>; }}/>
            <Route exact path="/edit-tour/:id" render={props => { return <EditTour tourId={props.match.params.id} update={this.update} {...props}></EditTour>; }}/>
            <Route exact path="/new-tour" render={props => { return <NewTour userInSession={this.state.loggedInUser} update={this.update} {...props}></NewTour>; }}/>
            <Route exact path="/profile" render={() => { return <Profile userInSession={this.state.loggedInUser} logout={this.logout}></Profile>; }}/>
            <Route exact path="/edit-profile" render={props => { return <EditProfile userInSession={this.state.loggedInUser} updateUser={this.updateAllUser} {...props}></EditProfile>; }}/>
          </Switch>
          </div>
          <Footer></Footer>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Redirect to="/login" />
          <Switch>
            <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
            <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
          </Switch>
        </div>
      );
    }
  }
}

export default App;

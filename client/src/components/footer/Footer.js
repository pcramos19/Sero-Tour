import React from 'react';
import { Link } from "react-router-dom";
// import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import "./Footer.scss"

// const useStyles = makeStyles({
//   root: {
//     width: "100vw",
//     postion: "fixed"
//   },

//   MuiBottomNavigation: {
//     height: 56,
//     background: "white"
// }

// })

export default function Footer() {
  // const classes = useStyles();
  // const [value, setValue] = React.useState('recents');

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
        <footer className="footer">
          <Link className="pedro" to="/home">
            <HomeIcon />
          </Link>
          <Link className="pedro" to="/mapa">
            <LocationOnIcon />
          </Link>
          <Link className="pedro" to="/fav">
            <FavoriteIcon />
          </Link>
          <Link className="pedro" to="/new-tour">
            <ControlPointIcon />
          </Link>
        </footer>
  );
}
import React, { Component } from 'react'; 
import PropTypes from 'prop-types'; 
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';  
import ShareIcon from '@material-ui/icons/Share';

class compartirPost extends Component { 
  render() { 
    return ( 
      <> 
        <FacebookShareButton url={this.props.Url} quote={`${this.props.Titulo} - ${this.props.Resumen}`}>  
            <ShareIcon round size={22} />  
        </FacebookShareButton>  
        {/* <TwitterShareButton url={this.props.Url} title={this.props.Titulo}> 
            <TwitterIcon round size={22} />  
        </TwitterShareButton>  */}
      </> 
    ); 
  } 
} 

compartirPost.propTypes = { 
    Url: PropTypes.string, 
    Titulo: PropTypes.string, 
    Resumen: PropTypes.string 
  }; 

export default compartirPost; 
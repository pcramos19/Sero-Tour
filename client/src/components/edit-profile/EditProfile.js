import React, { Component } from 'react';
import "./EditProfile.scss";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import axios from "axios";
import FilesServices from '../../services/files.services'

class EditProfile extends Component {
    constructor(props){
        super(props);
        this.filesServices = new FilesServices()
        this.state = { 
            img: `${this.props.userInSession.img}`,
            name: `${this.props.userInSession.name}`,
            username:`${this.props.userInSession.username}`,
            email: `${this.props.userInSession.email}`,
            description:`${this.props.userInSession.description}`
        };
      }

      handleFormSubmit = (event) => {

        event.preventDefault();
        const img = this.state.img;
        const name = this.state.name;
        const username = this.state.username;
        const email = this.state.email;
        const description = this.state.description;
    
        axios.post(`${process.env.REACT_APP_API_URL}/edit-profile/${this.props.userInSession._id}`, { img, name, username, email, description})
        .then( () => {
            this.setState({
                img: "",
                name: '',
                username:"",
                email: '',
                description:""
            },()=>{
              this.props.updateUser()
              this.props.history.push("/profile")

            });
        })
        .catch(error => {
          this.setState({
            error: true
          });
        })
      }

      handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
      }

      handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("img", e.target.files[0])
        this.filesServices.handleUpload(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.secure_url)
                this.setState({
                    img: response.secure_url
                })
            })
            .catch(err => console.log(err))
      }

    render(){
        return(
            <form className="form-edit" onSubmit={this.handleFormSubmit}>
                <PhotoCameraIcon/>
                <input type="file" placeholder={this.props.userInSession.img} id="name" name="img" onChange={e => this.handleFileUpload(e)}/>
                <label>Nombre:</label>  
                <input type="text" placeholder={this.props.userInSession.name} id="name" name="name" onChange={e => this.handleChange(e)} />
                <label>Usuario:</label>  
                <input type="text" placeholder={this.props.userInSession.username} id="name" name="username" onChange={e => this.handleChange(e)} />
                <label>Email:</label>  
                <input type="email" placeholder={this.props.userInSession.email} id="name" name="email" onChange={e => this.handleChange(e)} />
                <label>Descripción:</label>  
                <textarea type="email" placeholder={this.props.userInSession.description} id="name" name="description" onChange={e => this.handleChange(e)} />
                
                <input type="submit" value="Guardar cambios"/> 
            </form>
        )
    }
}
export default EditProfile;
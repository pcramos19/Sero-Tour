import React, { Component } from 'react';
import "./EditTour.scss";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import axios from "axios";
import FilesServices from '../../services/files.services'

class EditTour extends Component {
    constructor(props){
        super(props);
        this.filesServices = new FilesServices()
        this.state = { 
            img: "",
            audio:"",
            title: "",
            description:"",
            languages:"",
            duration:"",
            location:""
        };
      }
      

    handleFormSubmit = (event) => {

        event.preventDefault();
        const img = this.state.img;
        const audio = this.state.audio;
        const title = this.state.title;
        const description = this.state.description;
        const languages = this.state.languages;
        const duration = this.state.duration;
        const location  = this.state.location;

    
        axios.post(`${process.env.REACT_APP_API_URL}/edit-tour/${this.props.tourId}`, { img, title, audio, languages, description, duration, location})
        .then( () => {
            this.setState({
                img: "",
                audio:"",
                title: "",
                description:"",
                languages:"",
                duration:"",
                location:""
            },()=>{
              this.props.update();
              this.props.history.push("/tour-created")

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
                <input type="file" placeholder="" id="name" name="img" onChange={e => this.handleFileUpload(e)}/>
                <label>Audio:</label>  
                <input type="file" placeholder="" id="name" name="audio" onChange={e => this.handleFileUpload(e)}/>
                <label>Título:</label>  
                <input type="text" placeholder="" id="name" name="title" onChange={e => this.handleChange(e)} required/>
                <label>Idioma:</label>  
                <input type="text" placeholder="" id="name" name="languages" onChange={e => this.handleChange(e)} required/>
                <label>Duración:</label>  
                <input type="number" placeholder="" id="name" name="duration" onChange={e => this.handleChange(e)} required/>
                <label>Descripción:</label>  
                <textarea type="email" placeholder="" id="name" name="description" onChange={e => this.handleChange(e)} required/>
                
                <input type="submit" value="Guardar cambios"/> 
            </form>
        )
    }
}
export default EditTour;
import React, { Component } from 'react';
import "./NewTour.scss";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import axios from "axios";
import FilesServices from '../../services/files.services'
import GoogleSearchBox from '../googleSearchBox/googleSearchBox'

class NewTour extends Component {
    constructor(props){
        super(props);
        this.filesServices = new FilesServices()
        this.state = { 
            _id:"",
            img: "",
            title: '', 
            location: {
              lat: null,
              lng: null
            },
            audio:"",
            languages: "",
            duration:"",
            description:"",
            owner:`${this.props.userInSession._id}`,
            newRoute: false
        };
      }

      switchRoute() {
        this.setState({
          newRoute: !this.state.newRoute
        });
      }

      handleFormSubmit = (event) => {
        event.preventDefault();
        const _id = this.state._id;
        const img = this.state.img;
        const title = this.state.title;
        const location = this.state.location;
        const audio = this.state.audio;
        const languages = this.state.languages;
        const duration = this.state.duration;
        const description = this.state.description;
        const owner = this.props.userInSession._id;
    
        axios.post(`${process.env.REACT_APP_API_URL}/new-tour`, {_id, img, title, location, audio, languages, duration, description, owner})
        .then( () => {
          console.log(this.state)
            this.setState({
                _id:"",
                img: "",
                title: "", 
                location: {
                  lat: null,
                  lng: null
                },
                audio:"",
                languages: "",
                duration:"",
                description:"",
                owner:`${this.props.userInSession._id}`
            },()=>{
              // this.props.userInSession.toursCreated.push(`${this.state._id}`)
              this.props.update();
              this.props.history.push("/home")
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
                  ...this.state,
                    img: response.secure_url
                })
            })
            .catch(err => console.log(err))
      }

      updateStateWithLocation = dataFromChild => {
        this.setState({
            location: { 
              lat: dataFromChild.location.lat, 
              lng: dataFromChild.location.lng }
        })
      }

    render(){
        return(
            <form className="form-edit"  onSubmit={this.handleFormSubmit}>
                <PhotoCameraIcon/> 
                <input type="file" placeholder="" id="img" name="img" onChange={e => this.handleFileUpload(e)}/>
                <label>Título</label>  
                <input type="text" placeholder="" id="title" name="title" onChange={e => this.handleChange(e)}/>
                <label>Ubicación</label>  
                {/* <input type="text" placeholder="" id="location" name="location" onChange={e => this.handleChange(e)}/> */}
                <GoogleSearchBox selectLocation={(dataFromChild) => this.updateStateWithLocation(dataFromChild)}></GoogleSearchBox>
                {/* <label>Audio</label>  
                <input type="file" placeholder="" id="audio" name="audio" onChange={e => this.handleFileUpload(e)}/> */}
                <label>Idioma</label>  
                <input type="text" placeholder="" id="languages" name="languages" onChange={e => this.handleChange(e)}/>
                <label>Duración</label>  
                <input type="number" placeholder="" id="duration" name="duration" onChange={e => this.handleChange(e)}/>
                <label>Descripción</label>  
                <textarea type="text" placeholder="" id="description" name="description" onChange={e => this.handleChange(e)}/>
                
                <p onClick={() => this.switchRoute()}>{this.state.newRoute ? "Añadir Etapa" : "Añadir Etapa"}</p>
                  { this.state.newRoute && (
                  <div>
                    <label>Imagen</label>
                    <input type="file" placeholder="" id="img" name="img" onChange={e => this.handleFileUpload(e)}/>
                    <label>Audio</label>  
                    <input type="file" placeholder="" id="audio" name="audio" onChange={e => this.handleFileUpload(e)}/>                  
                    <label>Nombre</label>  
                    <input type="text" placeholder="" id="title" name="name" onChange={e => this.handleChange(e)}/>
                    <label>Descripción</label>  
                    <textarea type="text" placeholder="" id="description" name="description" onChange={e => this.handleChange(e)}/>
                    {/* <p onClick={() => this.switchRoute()}>{this.state.newRoute ? "Añadir Etapa" : "Añadir Etapa"}</p> */}
                  </div>
                  )}

                <input type="submit" value="Crear Tour"/> 
     
            </form>
        )
    }
}
export default NewTour;
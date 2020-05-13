import React, { Component } from 'react';
import "./Search.css";

class Search extends Component {

    state = {
        title: ""
    };

  

    updateForm(e) {
        const { title, value } = e.target
        console.log(value)
        this.props.searchBar(value)
        this.setState({
            [title]: value
        });  
    }

    render(){
        return(
            <form className="box">
                <div className="container-1">
                    <span className="icon"><i className="fa fa-search"></i></span>
                    <input type="search" id="search" value={this.state.title} title="title" onChange={e => this.updateForm(e)} placeholder="Search..." />
                </div>
            </form>
        )
    }
}

export default Search;
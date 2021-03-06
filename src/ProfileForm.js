import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProfileForm extends Component {

    state = {
        name:"",
        bio: "",
        age: "",
        likes: ""
    }

    handleChange =(e)=> {
        const name = e.target.name
        const value = e.target.value
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()  
        this.props.addProfile(this.state)
    //    this.props.handleOnSubmit(this.state)
      
       this.setState({
           name: "",
           bio: "",
           age: "",
           likes: ""
       })
    
    }

    render() {
        // console.log(this.state)
        return (
            <div>
            <form onSubmit = {this.handleSubmit}>
                <div>
                <label> Name:</label>
                <input type="text"
                 name ="name"
                 onChange ={this.handleChange}
                 value={this.state.name}
                 ></input>
                </div>
                <br></br>

                <div>
                <label> Age:</label>
                <input type="number"
                    name="age"
                    onChange = {this.handleChange} 
                    value={this.state.age} 
                ></input>
                </div>
                <br></br>

                <div>
                <label>Bio:</label>
                <input type="text"
                 name="bio"
                onChange = {this.handleChange}
                value={this.state.bio}
                ></input>
                </div>
                <br></br>

                 <div>
                <label>Likes</label>
                <input type= "number" 
                  name="likes"
                  onChange= {this.handleChange}
                  value={this.state.likes}
                ></input>
                 </div>  
                 <br></br> 

                <button type="submit">Submit</button>

                  
            </form>
           
            </div>
        )

    }
        
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProfile: (profile) => dispatch({type: 'ADD_PROFILE', payload: profile})
    }

}


export default connect (null, mapDispatchToProps)(ProfileForm);

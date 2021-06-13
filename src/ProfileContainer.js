
import {
    BrowserRouter as 
    
    // Switch,
    Route,
    
  } from "react-router-dom";

import React, { Component } from 'react';
import { connect } from 'react-redux'

import ProfileCard from './ProfileCard'
import ProfileForm from './ProfileForm'
import ProfileList from './ProfileList'



class ProfileContainer extends Component {

    state = {
        profiles: []
    }

    // handleClick= (id) => {
    //     const profiles = this.state.profiles.map(profile => {
    //         if (profile.id ===  id ){
    //             return {...profile, likes: profile.likes + 1}

    //         }else{
    //             return profile
    //         }}
    //     )
    //     this.setState ({
    //         profiles: profiles
    //     })
    // }

    // componentDidMount(){
    //     this.setState({
    //       profiles: [{id: 1, name:"Sunitee", age: 32, bio:"creative", likes: 0},
    //                 {id: 2, name:"Carl", age: 38, bio:"Need more likes", likes: 0},
    //                 {id: 3, name:"Madeline", age: 29, bio:"If you can't be cool, you can't be with the Countess.", likes: 0}
    //                 ]  
    //     })
    // }

    // handleDelete =(id)=> {
    //     // console.log(id)
    //     this.setState((prevState)=> {
    //         const newProfileState = prevState.profiles.filter(profile => profile.id !== id)

    //         return{
    //             profiles: newProfileState
    //         }
    //     })   
    // }


    

    

    // addNewProfile=(data) => {
    //     // console.log(data)
    //     const newProfile = { 
    //         id: this.state.profiles.length + 1, //hacky fix as there is no backend
    //         name: data.name,
    //         age: data.age,
    //         bio: data.bio,
    //         likes: parseInt(data.likes)
    //     }
    //     this.setState(prevState => ({
    //                profiles: [
    //                    ...prevState.profiles, 
    //                    newProfile
    //             ] 
    //     }

    //     ), () => console.log(this.state))
    // }

    returnProfileCards(){
        return this.state.profiles.map((profile) => {
            return <ProfileCard 
            key={profile.id} 
            id= {profile.id}
            name={profile.name}
            age={profile.age} 
            bio={profile.bio} 
            likes= {parseInt(profile.likes)}
            handleOnClick= {this.handleClick}
            handleOnDelete={this.handleDelete} 
             />
                
        })
    }

    render(){
        console.log(this.props)
        return (
            <div> 

                 <Route exact path ="/profiles/new">
                    <h1>BookFace Form</h1>
                        <ProfileForm 
                        handleOnSubmit = {this.addNewProfile}/>
                </Route>

                <Route exact path="/profiles">
                    <h1>All Profiles</h1>
                    <ProfileList />
                        {this.returnProfileCards()}
                
                     
                </Route>            
            
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {profiles: state.profiles}
}

export default  connect(mapStateToProps)(ProfileContainer)

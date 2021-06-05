import React, { Component } from 'react';
import ProfileCard from './ProfileCard'
import ProfileForm from './ProfileForm'


class List extends Component {

    state = {
        profiles: []
    }

    handleClick= (id) => {
        const profiles = this.state.profiles.map(profile => {
            if (profile.id ===  id ){
                return {...profile, likes: profile.likes + 1}

            }else{
                return profile
            }}
        )
        this.setState ({
            profiles: profiles
        })
    }

    componentDidMount(){
        this.setState({
          profiles: [{id: 1, name:"Sunitee", age: 32, bio:"creative", likes: 0},
                    {id: 2, name:"Carl", age: 38, bio:"Need more likes", likes: 0},
                    {id: 3, name:"Madeline", age: 29, bio:"If you can't be cool, you can't be with the Countess.", likes: 0}
                    ]  
        })
    }

    returnProfileCards(){
        return this.state.profiles.map((profile) => {
            return <ProfileCard 
            key={profile.id} 
            id= {profile.id}
            name={profile.name}
            age={profile.age} 
            bio={profile.bio} 
            likes= {parseInt(profile.likes)}
            handleClick= {this.handleClick} />
                
        })
    }

    // handleDelete =(e)=>{
    //     console.log("submitted")
    //     e.preventDefault()
      

    // }


    addNewProfile=( data) => {
        const newProfile = {
            // key: data.id,
            id: this.state.profiles.length + 1,
            name: data.name,
            age: data.age,
            bio: data.bio,
            likes: parseInt(data.likes)
        }
        this.setState((prevState) => {
            return {
                   profiles: [...prevState.profiles, newProfile] 
            }
        })
    }

    render() {
        return (
            <div>
                <h1> Book Face </h1>
                <ProfileForm 
                handleOnSubmit ={this.addNewProfile}

                /> 
                {this.returnProfileCards()}

            </div>
        );
    }
}

export default List;

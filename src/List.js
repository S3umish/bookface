import React, { Component } from 'react';
import ProfileCard from './ProfileCard'

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
            }

            }
        )
        this.setState ({
            profiles: profiles
        })
    }

    componentDidMount(){
        this.setState({
          profiles: [{id: 1, name:"Sunitee", bio:"creative", likes: 0},
                    {id: 2, name:"Carl", bio:"Need more likes", likes: 0},
                    {id: 3, name:"Madeline", bio:"If you can't be cool, you can't be with the Countess.", likes: 0}
                    ]  
        })
    }

    returnProfileCards(){
        return this.state.profiles.map((profile) => {
            return <ProfileCard 
            key={profile.id} 
            id= {profile.id}
            name={profile.name} 
            bio={profile.bio} 
            likes= {profile.likes}
            handleClick= {this.handleClick} />
                
        })
    }



    render() {


        return (
            <div>
                <h1> Book Face </h1> 
                {this.returnProfileCards()}

            </div>
        );
    }
}

export default List;

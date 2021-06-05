import React from 'react'




export default function ProfileCard({id, name, age, bio, likes, handleOnClick, handleOnDelete}) {

    const onDelete = function(){
        handleOnDelete(id)
    }

    

    return (
        <div>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{bio}</p>
            <p>Likes:{likes}</p>
            <button onClick={()=> handleOnClick(id)}>Like</button>
            <br></br>
            <button onClick= {onDelete}>Delete'X'</button>
        </div>
    )
}

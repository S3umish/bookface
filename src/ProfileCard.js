import React from 'react'




export default function ProfileCard(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.bio}</p>
            <p>Likes: {props.likes}</p>
            <button onClick={()=>props.handleClick(props.id)}>Like</button>
        </div>
    )
}

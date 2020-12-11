// Write your Character component here

import React from 'react';


export default function Character(props){
    const {info} = props
    return (
        <div className = 'character-div'>
            <div className='img-container'>
                <img src = {info.image} alt = {info.name}/> 
                <h3>{info.name}</h3>
            </div>
            <div className = 'info'>
                    <p>Gender: {info.gender} </p>
                    <p>Species: {info.species} </p>
                    <p>Status: {info.status} </p>
            </div>
        </div>
    )
}


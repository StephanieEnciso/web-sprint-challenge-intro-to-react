// Write your Character component here

import React from 'react';


export default function Character(props){
    const {info} = props
    return (
        <div>
            <div className='img-container'>
                <img src = {info.image} alt = {info.name}/> 
                <h4>{info.name}</h4>
            </div>
            <div>
                    <p>Gender: {info.gender} </p>
                    <p>Species: {info.species} </p>
                    <p>Status: {info.status} </p>
            </div>
        </div>
    )
}


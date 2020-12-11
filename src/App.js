import React, {useState, useEffect }from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character')
    .then((res) => {
      setCharacters(res.data.results);
      console.log(res.data.results)
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <StyledDiv className="App">
      <h1 className="Header">Rick and Morty Characters</h1>
      {characters.map((character) =>{
        return <Character key = {character.id} info = {character} />
          
      })}
    </StyledDiv> 
  );
}

const StyledDiv = styled.div`

  h1{
    color: #a0e9f2;
    text-shadow: 3px 3px darkslateblue;
    font-size: 4rem;
  }
  .character-div {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    padding-bottom: 3%;
  }

  .img-container {
    background-color: darkslateblue;
    padding-right: 3%;
    padding-left: 3%;
    padding-top: 3%;
  }

  img {
    width: 28vw;
    height: 40vh;
  }

  h3 {
   
    color: #a0e9f2;
    font-size: 1.8rem;
    font-weight: bold;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 5%;
    padding-left: 10%;
  }

  p {
    color: darkslateblue;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export default App;

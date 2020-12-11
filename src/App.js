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
    <div className="App">
      <StyledH1 className="Header">Rick and Morty Characters</StyledH1>
      {characters.map((character) =>{
        return (
          <StyledCharacterDiv>
            <Character key = {character.id} info = {character} />
          </StyledCharacterDiv>)
      })}
    </div>
  );
}

const StyledH1 = styled.h1`
  color: #a0e9f2;
  text-shadow: 3px 3px darkslateblue;
`;
const StyledCharacterDiv = styled.div`
  border: 4px solid black;
  width: 70%;

  img {
    width: 20vw;
    height: 32vh;
  }
`;

export default App;

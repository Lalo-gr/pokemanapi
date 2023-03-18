import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axios from 'axios'

function App() {
  
  const[pokemonName, setPokemonName] = useState("");

  const[pokemon, setPokemon] = useState({})


  const searchPokemon = () =>{
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
      setPokemon({
        name: pokemonName, 
        species: response.data.species.name, 
        img: response.data.sprites.frton_default, 
        hp: response.data.stats[0].base_stat})
    }).catch((err) => {
      
    });
  }



  return(
    <div className='App'>
    <div className="TitleSection">
      <h1>Pokeman Stats</h1>
      <input type="text" onChange={(event) =>{setPokemonName(event.target.value);
      }}
      />
      <button onClick={searchPokemon}>Search Pokeman</button>
    </div>
    </div>
    );
  }

export default App

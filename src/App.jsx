import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axios from 'axios'

function App() {
  
  const[pokemonName, setPokemonName] = useState("");

  const[pokemonChosen, setPokemonChosen] = useState(false);

  const[pokemon, setPokemon] = useState({
      name: "", 
      species: "", 
      img: "", 
      hp: "",
      attack: "",
      defense: "",
      type: "",
    });

  const searchPokemon = () =>{
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
      console.log(response);
      setPokemon({
        name: pokemonName, 
        species: response.data.species.name, 
        img: response.data.sprites.front_default, 
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        type: response.data.types[0].type.name,
      })
      setPokemonChosen(true);
      
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
    <div className="DisplaySection">
      {!pokemonChosen ? (<h1> Please choose a pokemon</h1>) : (<h1>{pokemonName}</h1>)}
    </div>
    </div>
    );
  }

export default App

import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setpokemonChosen] = useState(false);
  const [pokemon, setpokemon] = useState({
    name: "",
    img: "",
    hp: "",
    type: ""
  });
  
  //Función para hacer la búsqueda del pokemón
  const searchPokemon = () => {
    //Request o petición
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${ pokemonName }`).then(
      (response) => {
        setpokemon({
          name: pokemonName,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          type: response.data.types[0].type.name
        });
        setpokemonChosen(true);
      }
    );
  }

  return (
    <div className="App">
      <div className="TitleSection">
        <h1> Pokemón app </h1>
        <input type="text" onChange={(e) => { setPokemonName(e.target.value)}}></input>
        <button onClick={searchPokemon}> Buscar </button>
      </div>

      <div className="DisplaySection"> {!pokemonChosen ? <h1> Elije un pokemon </h1> : (
        <>
          <h1>{pokemon.name}</h1>
          <img src={ pokemon.img }/>
          <h1>Species: {pokemon.hp} </h1>
        </>
      ) }
      </div>
    </div>
  );
}

export default App;
// Qué es esta parte???

import "./App.css";
import { useState } from "react";
import Axios from "axios";
import { Text }  from "./componentes/Atomos/Text.js"
import { PokemonData } from "./componentes/Moleculas/PokemonData.js";
import { Imagen } from "./componentes/Atomos/Imagen";
import { PokemonCard } from "./componentes/Organismos/PokemonCard";


function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setpokemonChosen] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const [pokemon, setpokemon] = useState({
    name: "",
    img: "",
    hp: "",
    type: ""
  });
  
  //Función para hacer la búsqueda del pokemón
  const searchPokemon = () => {
    //Request o petición
/*     Axios.get(`https://pokeapi.co/api/v2/pokemon/${ pokemonName }`).then(
      (response) => {
        setpokemon({
          name: pokemonName,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          type: response.data.types[0].type.name
        });
        setpokemonChosen(true);
      }
    ); */
    setIsValid (!isValid)
  }

  return (
    <div className="app">
      <h1> Pokemedex </h1>
      {/* <Text variant={ isValid ? 'title-1':'title-2'} > palabra </Text> */}
      {/* <Text variant="title-2">palabra</Text> */}
      <section className="contenido">
        <PokemonCard></PokemonCard>
        <PokemonCard></PokemonCard> 
        <PokemonCard></PokemonCard>
      </section>

    </div>
  );
}

export default App;
